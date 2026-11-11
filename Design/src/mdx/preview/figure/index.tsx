import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components';

// Hooks
import { DARK_THEME_CLASS_NAME, LIGHT_THEME_CLASS_NAME } from 'design/hooks';

// Partials
import { dressed } from './props-of';
import { useFigure } from './use-figure';

const Figure: React.FunctionComponent = () => {
  const { dark, key, preset, props, setElement, span } = useFigure();

  return (
    // A spanned stage stretches the example, so a field fills it as it would a form.
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
        key={key}
        ref={setElement}
      >
        {dressed(preset.props.children, props)}
      </figure>
    </Layout>
  );
};

export { Figure };
