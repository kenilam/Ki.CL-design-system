import React from 'react';

// Styles
import './styles.scss';

// Partials
import { Legend } from './legend';
import { Provider } from './context';
import { Root } from './root';

type Props = Omit<React.ComponentProps<typeof Provider>, 'children'> &
  React.ComponentProps<typeof Root>;

const Diagram: React.FunctionComponent<Props> = ({
  className,
  ref,
  ...props
}) => {
  return (
    <Provider {...props}>
      <Root className={className} ref={ref} />
    </Provider>
  );
};

export type { DiagramState } from './spec';
export type {
  LegendItem as DiagramLegendItem,
  Spec as DiagramSpec,
} from './spec';
export { Diagram, Legend as DiagramLegend };
