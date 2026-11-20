import React from 'react';

// Components
import { FormItem } from 'design/components/form';

// Context
import { Provider } from './context';

// Partials
import { Root } from './root';

// Styles
import './styles.scss';

import type { ColorPickerProps } from './spec';

const ColorPicker: React.FC<ColorPickerProps> = ({
  description,
  label,
  layout,
  ...props
}) => {
  if (label || description) {
    return (
      <FormItem {...layout} description={description} label={label}>
        <ColorPicker {...props} />
      </FormItem>
    );
  }

  return (
    <Provider picker={props as ColorPickerProps}>
      <Root />
    </Provider>
  );
};

ColorPicker.displayName = 'ColorPicker';

export type { ColorPickerPresentation, ColorPickerProps } from './spec';
export { COLOR_PICKER_PRESENTATIONS } from './spec';
export { ColorPicker };
