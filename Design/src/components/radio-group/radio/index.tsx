import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Layout } from 'design/components/layout';
import {
  CHOICE_LABEL_CLASS_NAME,
  CHOICE_LABEL_LAYOUT,
} from 'design/components/choice-label';

// Spec
import type { RadioProps } from 'design/components/radio-group/spec';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME as RADIO_GROUP } from 'design/components/radio-group/constants';

// Context
import { useRadioGroup } from 'design/components/radio-group/context';

const CLASS_NAME = `${RADIO_GROUP}__item`;

/**
 * One native radio. Children are its visible label; the `<label>` wraps both
 * so clicking the text selects the radio.
 */
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ children, className, onChange, value, ...rest }, ref) => {
    const group = useRadioGroup();
    const isControlled = group.value !== undefined;

    return (
      <Layout {...CHOICE_LABEL_LAYOUT}>
        <label
          className={classNames(CLASS_NAME, CHOICE_LABEL_CLASS_NAME, className)}
        >
          <input
            ref={ref}
            type='radio'
            className={classNames(
              `${CLASS_NAME}__control`,
              'kicl-border-radius-full'
            )}
            name={group.name}
            value={value}
            required={group.required}
            checked={isControlled ? group.value === value : undefined}
            defaultChecked={
              isControlled ? undefined : group.defaultValue === value
            }
            onChange={(event) => {
              onChange?.(event);
              group.onValueChange(value);
            }}
            {...rest}
          />
          {children}
        </label>
      </Layout>
    );
  }
);

Radio.displayName = 'Radio';

export { Radio };
