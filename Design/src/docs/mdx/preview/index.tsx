import React, { useEffect, useState } from 'react';

// Libraries
import classNames from 'classnames';

import { useParams } from 'design/router';

// Components
import {
  Card,
  CardContent,
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

/** The light theme's class, for a stage that is light on a dark site. */
const LIGHT_THEME_CLASS_NAME = 'kicl--theme--light';

/** How a component reports the props a reader can also change by using it. */
const REPORTS: Record<string, string> = {
  checked: 'onCheckedChange',
  open: 'onOpenChange',
  value: 'onValueChange',
};

/**
 * What an example takes from the controls: the props a page's `controls.ts`
 * names, on its component. The example spreads them last on that component,
 * so a control wins over what the file writes.
 */
export type Controlled<
  Component extends React.ElementType,
  Key extends keyof React.ComponentPropsWithoutRef<Component>,
> = Partial<Pick<React.ComponentPropsWithoutRef<Component>, Key>> &
  // The stage sets the columns an example takes through it.
  Pick<React.HTMLAttributes<HTMLElement>, 'className'>;

export type { ControlsSpec } from './controls';

type PresetProps = React.PropsWithChildren<{
  /** What the preset shows, as the dropdown reads it. */
  name: string;
  /**
   * The code to show: the example's own file, read with `?raw`. Its
   * component is `Preview`, and is shown under the preset's name.
   */
  code: string;
  /**
   * Toggles only this preset has, on top of the page's. `null` takes off a
   * page toggle that means nothing for this example.
   */
  controls?: Record<string, ControlsSpec[string] | null>;
  description?: React.ReactNode;
}>;

type PreviewProps = React.PropsWithChildren<{
  /** The props the reader can toggle, on the component that spreads `props`. */
  controls?: ControlsSpec;
  /**
   * Mounts the example again when a control changes, for a component that
   * only animates as it first renders.
   */
  replay?: boolean;
  /**
   * The columns the stage is at most, for a component that fills its
   * parent, like a field. Without it the stage is as wide as the page.
   */
  span?: ColumnSpan;
}>;

/** One way to set a component up. `Preview` reads it; it renders nothing itself. */
const Preset: React.FunctionComponent<PresetProps> = ({ children }) => (
  <>{children}</>
);

/** The preset's name as an identifier: `With a label` is `WithALabel`. */
const identifierOf = (name: string) =>
  name
    .replace(/(?:^|[^A-Za-z0-9]+)([A-Za-z0-9])/g, (_, first: string) =>
      first.toUpperCase()
    )
    .replace(/[^A-Za-z0-9]/g, '');

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
    Object.entries(values).filter(([prop]) => !forwarded.has(prop))
  );

  return snippetOf(
    withForwarded(
      readTags(code).reduceRight(
        (source, tag) => withValues(source, tag, literals, spread),
        code
      ),
      forwarded,
      values
    )
  ).replace(/\bPreview\b/g, `${identifierOf(slug)}${identifierOf(name)}`);
};

/** What a component reports: the value itself, or the element's own state from an event. */
const reported = (name: string, report: unknown) =>
  report !== null && typeof report === 'object' && 'currentTarget' in report
    ? ((report.currentTarget as Record<string, Value>)[name] ?? undefined)
    : (report as Value);

/**
 * The props the example gets: each control's value, `undefined` included
 * where the file writes the prop, so that the control can take it off, and
 * a handler for each prop the component reports.
 */
const propsOf = (
  controls: Record<string, Control>,
  values: Values,
  literals: Set<string>,
  onReport: (name: string, value: Value) => void
) => {
  const props: Record<string, unknown> = {};

  for (const [name, control] of Object.entries(controls)) {
    // A prop that doesn't apply is left out, the file's own value with it.
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
      props[report] = (next: unknown) => onReport(name, reported(name, next));
    }
  }

  return props;
};

/** What the controls that are on bring with them, where the file doesn't write it. */
const extrasOf = (
  controls: Record<string, Control>,
  values: Values,
  tag: Tag | null
) => {
  const written = new Set(tag?.attributes.map(({ name }) => name));
  const extras: Values = {};

  for (const [name, control] of Object.entries(controls)) {
    if (!values[name] || !isAllowed(control, values)) {
      continue;
    }

    for (const [prop, value] of Object.entries(control.with ?? {})) {
      // A file that writes `value` has already set what `defaultValue` would.
      const controlled = prop.replace(/^default(\w)/, (_, first: string) =>
        first.toLowerCase()
      );

      if (!written.has(prop) && !written.has(controlled)) {
        extras[prop] = value;
      }
    }
  }

  return extras;
};

/** The example with the props, on its first element. */
const dressed = (children: React.ReactNode, props: Record<string, unknown>) =>
  React.Children.map(children, (child, index) =>
    index === 0 && React.isValidElement(child)
      ? React.cloneElement(child, props)
      : child
  );

/**
 * The example on a stage, a dropdown of presets and a toggle for each prop
 * under it, then the code for what is shown. The code is the example's file
 * with the chosen values written in, and using the component moves the
 * toggle that reports it.
 */
const Preview: React.FunctionComponent<PreviewProps> = ({
  children,
  controls: spec = {},
  replay,
  span,
}) => {
  const t = useCopy();
  const { slug = '' } = useParams();

  const presets = React.Children.toArray(children).filter(
    (child): child is React.ReactElement<PresetProps> =>
      React.isValidElement(child) && child.type === Preset
  );

  const [chosen, setChosen] = useState(presets[0]?.props.name);
  const preset =
    presets.find(({ props }) => props.name === chosen) ?? presets[0];

  // The page's toggles, and the preset's own after them.
  const controlsOf = (shown?: React.ReactElement<PresetProps>) =>
    Object.fromEntries(
      Object.entries({ ...spec, ...shown?.props.controls }).flatMap(
        ([name, control]) => (control ? [[name, controlOf(control)]] : [])
      )
    );
  const controls = controlsOf(preset);
  const names = Object.keys(controls);

  // The file's own values: what a control starts from, and what it can take off.
  const tag = preset ? readTag(preset.props.code) : null;
  const { literals, values: written } = valuesOf(tag, names);

  const [values, setValues] = useState<Values>(written);
  const [dark, setDark] = useState<boolean>();
  const [stage, setStage] = useState<HTMLDivElement | null>(null);
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (!stage) {
      return undefined;
    }

    const read = () => setOutput(outputOf(stage));
    const observer = new MutationObserver(read);

    read();
    observer.observe(stage, {
      attributes: true,
      characterData: true,
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, [stage]);

  if (!preset) {
    return null;
  }

  const pick = (name: string) => {
    const next = presets.find(({ props }) => props.name === name);

    setChosen(name);
    setValues(
      next
        ? valuesOf(readTag(next.props.code), Object.keys(controlsOf(next)))
            .values
        : {}
    );
  };

  const set = (name: string, value: Value) =>
    setValues((current) => ({
      ...current,
      [name]: value,
      ...Object.fromEntries(
        Object.entries(controls)
          .filter(
            ([other, control]) =>
              control.except === name &&
              current[other] === (value ?? controls[name]?.default)
          )
          .map(([other]) => [other, undefined])
      ),
    }));

  const hasControls = names.length > 0 && tag !== null;
  const extras = hasControls ? extrasOf(controls, values, tag) : {};
  const props = hasControls
    ? { ...extras, ...propsOf(controls, values, literals, set) }
    : {};
  // What the code writes: nothing for a prop that doesn't apply.
  const applied = {
    ...Object.fromEntries(
      Object.entries(values).map(([name, value]) => [
        name,
        controls[name] && !isAllowed(controls[name], values)
          ? undefined
          : value,
      ])
    ),
    ...extras,
  };

  return (
    <StageContext.Provider value={{ dark, setDark }}>
      <Card gap='wide' key={preset.props.name} variant='tertiary'>
        {presets.length > 1 ? (
          // A row that wraps, so each field keeps its own width.
          <Layout alignItems='end' display='flex' gap='wide' wrap>
            <CardContent>
              <Segmented
                collapse='popover'
                collapsed
                onValueChange={pick}
                value={chosen}
              >
                <legend>{t('docs_preset')}</legend>
                {presets.map(({ props: { name } }) => (
                  <SegmentedItem key={name} value={name}>
                    {name}
                  </SegmentedItem>
                ))}
              </Segmented>
            </CardContent>
          </Layout>
        ) : null}
        {preset.props.description ? (
          <CardContent>
            <Text variant='secondary'>{preset.props.description}</Text>
          </CardContent>
        ) : null}
        {/* A spanned stage stretches the example, so a field fills it as it would a form. */}
        <Layout
          alignContent='center'
          alignItems='center'
          display='grid'
          justifyItems={span ? undefined : 'center'}
        >
          {/* A theme of its own once a preset sets one, with the theme's colours. */}
          <div
            className={classNames(
              'kicl-min-block-size-columns-2',
              span && [
                'kicl-inline-size-full',
                'kicl-margin-inline-auto',
                `kicl-max-inline-size-columns-${span}`,
              ],
              dark !== undefined && [
                dark ? DARK_THEME_CLASS_NAME : LIGHT_THEME_CLASS_NAME,
                'kicl-background-color-body',
                'kicl-border-radius-md',
                'kicl-color-body-color',
              ]
            )}
            key={
              replay
                ? JSON.stringify(
                    Object.entries(applied).filter(
                      ([name]) => !controls[name]?.live
                    )
                  )
                : undefined
            }
            ref={setStage}
          >
            {dressed(preset.props.children, props)}
          </div>
        </Layout>
        {hasControls ? (
          <Layout alignItems='end' display='flex' gap='wide' wrap>
            <CardContent>
              <Controls controls={controls} onChange={set} values={values} />
            </CardContent>
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
