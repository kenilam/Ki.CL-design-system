import React, { useEffect, useState } from 'react';

// Libraries
import classNames from 'classnames';

import { useParams } from 'design/router';

// Components
import {
  Card,
  Layout,
  Segmented,
  SegmentedItem,
  Text,
} from 'design/components';
import type { ColumnSpan } from 'design/components/spec';

// Hooks
import { DARK_THEME_CLASS_NAME } from 'design/hooks';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Partials
import { useDocsCopy } from 'design/docs/mdx/copy';
import { Code } from './code';
import {
  type Control,
  Controls,
  type ControlsSpec,
  type Value,
  type Values,
  controlOf,
  isAllowed,
} from './controls';
import {
  type Tag,
  forwardedOf,
  readTag,
  readTags,
  snippetOf,
  valuesOf,
  withForwarded,
  withValues,
} from './source';
import { outputOf } from './output';
import { StageContext } from './stage';

const LIGHT_THEME_CLASS_NAME = 'kicl--theme--light';

const REPORTS: Record<string, string> = {
  checked: 'onCheckedChange',
  open: 'onOpenChange',
  value: 'onValueChange',
};

/**
 * The example spreads these last on its component, so a control wins over
 * what the file writes.
 */
export type Controlled<
  Component extends React.ElementType,
  Key extends keyof React.ComponentPropsWithoutRef<Component>,
> = Partial<Pick<React.ComponentPropsWithoutRef<Component>, Key>> &
  Pick<React.HTMLAttributes<HTMLElement>, 'className'>;

export type { ControlsSpec } from './controls';

type PresetProps = React.PropsWithChildren<{
  /** The key of its name on the page. `name` stays in English for the code. */
  label: Parameters<ReturnType<typeof useDocsCopy>>[0];
  name: string;
  /**
   * The example's own file, read with `?raw`. Its component must be named
   * `Preview`; the code shown renames it after the page and preset.
   */
  code: string;
  /**
   * Added to the page's toggles. `null` removes a page toggle that doesn't
   * apply to this example.
   */
  controls?: Record<string, ControlsSpec[string] | null>;
  description?: React.ReactNode;
}>;

type PreviewProps = React.PropsWithChildren<{
  controls?: ControlsSpec;
  /**
   * Mounts the example again when a control changes, for a component that
   * only animates as it first renders.
   */
  replay?: boolean;
  /**
   * The stage's maximum width in columns. Without it the stage is as wide as
   * the page.
   */
  span?: ColumnSpan;
}>;

const Preset: React.FunctionComponent<PresetProps> = ({ children }) => {
  return <>{children}</>;
};

/** `With a label` becomes `WithALabel`. */
const identifierOf = (name: string) => {
  return name
    .replace(/(?:^|[^A-Za-z0-9]+)([A-Za-z0-9])/g, (_, first: string) => {
      return first.toUpperCase();
    })
    .replace(/[^A-Za-z0-9]/g, '');
};

const codeOf = (
  { code, name }: PresetProps,
  literals: Set<string>,
  values: Values,
  slug: string,
  names: string[]
) => {
  // A control the example passes on by name is written there, not on the spread.
  const forwarded = forwardedOf(code, names);
  const spread = Object.fromEntries(
    Object.entries(values).filter(([prop]) => {
      return !forwarded.has(prop);
    })
  );

  return snippetOf(
    withForwarded(
      readTags(code).reduceRight((source, tag) => {
        return withValues(source, tag, literals, spread);
      }, code),
      forwarded,
      values
    )
  ).replace(/\bPreview\b/g, `${identifierOf(slug)}${identifierOf(name)}`);
};

const reported = (name: string, report: unknown) => {
  return report !== null &&
    typeof report === 'object' &&
    'currentTarget' in report
    ? ((report.currentTarget as Record<string, Value>)[name] ?? undefined)
    : (report as Value);
};

/**
 * Sets `undefined` where the file writes a prop, so the control can take it
 * off.
 */
const propsOf = (
  controls: Record<string, Control>,
  values: Values,
  literals: Set<string>,
  onReport: (name: string, value: Value) => void
) => {
  const props: Record<string, unknown> = {};

  for (const [name, control] of Object.entries(controls)) {
    if (!isAllowed(control, values)) {
      if (literals.has(name)) {
        props[name] = undefined;
      }

      continue;
    }

    if (values[name] !== undefined || literals.has(name)) {
      props[name] = values[name];
    }

    const report = control.on ?? REPORTS[name];

    if (report) {
      props[report] = (next: unknown) => {
        onReport(name, reported(name, next));
      };
    }
  }

  return props;
};

const extrasOf = (
  controls: Record<string, Control>,
  values: Values,
  tag: Tag | null
) => {
  const written = new Set(
    tag?.attributes.map(({ name }) => {
      return name;
    })
  );
  const extras: Values = {};

  for (const [name, control] of Object.entries(controls)) {
    if (!values[name] || !isAllowed(control, values)) {
      continue;
    }

    for (const [prop, value] of Object.entries(control.with ?? {})) {
      // A file that writes `value` has already set what `defaultValue` would.
      const controlled = prop.replace(/^default(\w)/, (_, first: string) => {
        return first.toLowerCase();
      });

      if (!written.has(prop) && !written.has(controlled)) {
        extras[prop] = value;
      }
    }
  }

  return extras;
};

const dressed = (children: React.ReactNode, props: Record<string, unknown>) => {
  return React.Children.map(children, (child, index) => {
    return index === 0 && React.isValidElement(child)
      ? React.cloneElement(child, props)
      : child;
  });
};

const Preview: React.FunctionComponent<PreviewProps> = ({
  children,
  controls: spec = {},
  replay,
  span,
}) => {
  const t = useCopy();
  const docsCopy = useDocsCopy();
  const { slug = '' } = useParams();

  const presets = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<PresetProps> => {
      return React.isValidElement(child) && child.type === Preset;
    }
  );

  const [chosen, setChosen] = useState(presets[0]?.props.name);
  const preset =
    presets.find(({ props }) => {
      return props.name === chosen;
    }) ?? presets[0];

  const controlsOf = (shown?: React.ReactElement<PresetProps>) => {
    return Object.fromEntries(
      Object.entries({ ...spec, ...shown?.props.controls }).flatMap(
        ([name, control]) => {
          return control ? [[name, controlOf(control)]] : [];
        }
      )
    );
  };
  const controls = controlsOf(preset);
  const names = Object.keys(controls);

  const tag = preset ? readTag(preset.props.code) : null;
  const { literals, values: written } = valuesOf(tag, names);

  const [values, setValues] = useState<Values>(written);
  const [dark, setDark] = useState<boolean>();
  const [stage, setStage] = useState<HTMLElement | null>(null);
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (!stage) {
      return undefined;
    }

    const read = () => {
      setOutput(outputOf(stage));
    };
    const observer = new MutationObserver(read);

    read();
    observer.observe(stage, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [stage]);

  if (!preset) {
    return null;
  }

  const pick = (name: string) => {
    const next = presets.find(({ props }) => {
      return props.name === name;
    });

    setChosen(name);
    setValues(
      next
        ? valuesOf(readTag(next.props.code), Object.keys(controlsOf(next)))
            .values
        : {}
    );
  };

  const set = (name: string, value: Value) => {
    setValues((current) => {
      return {
        ...current,
        [name]: value,
        ...Object.fromEntries(
          Object.entries(controls)
            .filter(([other, control]) => {
              return (
                control.except === name &&
                current[other] === (value ?? controls[name]?.default)
              );
            })
            .map(([other]) => {
              return [other, undefined];
            })
        ),
      };
    });
  };

  const hasControls = names.length > 0 && tag !== null;
  const extras = hasControls ? extrasOf(controls, values, tag) : {};
  const props = hasControls
    ? { ...extras, ...propsOf(controls, values, literals, set) }
    : {};
  const applied = {
    ...Object.fromEntries(
      Object.entries(values).map(([name, value]) => {
        return [
          name,
          controls[name] && !isAllowed(controls[name], values)
            ? undefined
            : value,
        ];
      })
    ),
    ...extras,
  };

  return (
    <StageContext.Provider value={{ dark, setDark }}>
      <Card
        gap='normal'
        is='section'
        key={preset.props.name}
        variant='tertiary'
      >
        {presets.length > 1 ? (
          <Segmented
            className='kicl-justify-self-start'
            collapse='popover'
            collapsed
            onValueChange={pick}
            value={chosen}
          >
            <legend>{t('docs_preset')}</legend>
            {presets.map(({ props: { label, name } }) => {
              return (
                <SegmentedItem key={name} value={name}>
                  {docsCopy(label)}
                </SegmentedItem>
              );
            })}
          </Segmented>
        ) : null}
        {preset.props.description ? (
          <Text variant='secondary'>{preset.props.description}</Text>
        ) : null}
        {/* A spanned stage stretches the example, so a field fills it as it would a form. */}
        <Layout
          alignContent='center'
          alignItems='center'
          display='grid'
          justifyItems={span ? undefined : 'center'}
        >
          <figure
            className={classNames(
              'kicl-min-block-size-columns-1',
              span
                ? [
                    'kicl-inline-size-full',
                    'kicl-margin-inline-auto',
                    `kicl-max-inline-size-columns-${span}`,
                  ]
                : null,
              dark !== undefined
                ? [
                    dark ? DARK_THEME_CLASS_NAME : LIGHT_THEME_CLASS_NAME,
                    'kicl-background-color-body',
                    'kicl-border-radius-md',
                    'kicl-color-body-color',
                  ]
                : null
            )}
            key={
              replay
                ? JSON.stringify(
                    Object.entries(applied).filter(([name]) => {
                      return !controls[name]?.live;
                    })
                  )
                : undefined
            }
            ref={setStage}
          >
            {dressed(preset.props.children, props)}
          </figure>
        </Layout>
        {hasControls ? (
          <Layout alignItems='end' display='flex' gap='normal' wrap='stack'>
            <form>
              <Controls controls={controls} onChange={set} values={values} />
            </form>
          </Layout>
        ) : null}
        <Code className='kicl-min-block-size-columns-2'>
          {codeOf(preset.props, literals, applied, slug, names)}
        </Code>
        <Code language='markup' title={t('docs_output')}>
          {output}
        </Code>
      </Card>
    </StageContext.Provider>
  );
};

export { Preset, Preview };
