import classNames from 'classnames';

// Spec
import type * as Spec from './spec';

const CLASS_NAME = 'kicl-layout';

const getLayoutClassNames = ({
  alignContent,
  alignItems,
  autoFlow = 'row',
  className,
  columns,
  display = 'grid',
  fill,
  frames,
  fullScreen,
  gap = 'normal',
  justifyContent,
  justifyItems,
  span,
  wrap,
}: Spec.Props) => {
  return classNames(
    CLASS_NAME,
    {
      [`${CLASS_NAME}--align-content--${alignContent}`]: alignContent,
      [`${CLASS_NAME}--align-items--${alignItems}`]: alignItems,
      [`${CLASS_NAME}--${autoFlow}`]: autoFlow,
      [`${CLASS_NAME}--columns`]: columns,
      [`${CLASS_NAME}--display--${display}`]: display,
      [`${CLASS_NAME}--fill--${fill}`]: fill,
      [`${CLASS_NAME}--full-screen`]: fullScreen,
      [`${CLASS_NAME}--gap--${gap}`]: gap,
      [`${CLASS_NAME}--justify-content--${justifyContent}`]: justifyContent,
      [`${CLASS_NAME}--justify-items--${justifyItems}`]: justifyItems,
      [`${CLASS_NAME}--span--${span}`]: span,
      [`${CLASS_NAME}--wrap`]: wrap,
      [`${CLASS_NAME}--wrap--stack`]: wrap === 'stack',
      [`${CLASS_NAME}--${frames}`]: frames,
    },
    className
  );
};

export { getLayoutClassNames };
