import React, { useId } from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';

// Spec
import type { RadioGroupProps } from './spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from './constants';

// Context
import { RadioGroupContext } from './context';

// Partials
import { Radio } from './radio';

const RadioGroup = React.forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      children,
      className,
      defaultValue,
      legend,
      name,
      onValueChange,
      required,
      value,
      ...rest
    },
    ref
  ) => {
    const reactId = useId();

    return (
      <RadioGroupContext.Provider
        value={{
          defaultValue,
          name: name ?? reactId,
          onValueChange: (next) => {
            onValueChange?.(next);
          },
          required,
          value,
        }}
      >
        <Layout gap='narrower' justifyItems='start'>
          <fieldset
            ref={ref}
            className={classNames(CLASS_NAME, className)}
            role='radiogroup'
            {...rest}
          >
            {legend ? (
              <legend className='kicl-margin-block-end-narrower'>
                {legend}
              </legend>
            ) : null}
            {children}
          </fieldset>
        </Layout>
      </RadioGroupContext.Provider>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';

export type { RadioGroupProps, RadioProps } from './spec';
export { Radio, RadioGroup };
