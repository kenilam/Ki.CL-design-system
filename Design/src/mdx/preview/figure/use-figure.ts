// Partials
import { usePreviewContext } from 'design/mdx/preview/context';
import { useElement } from 'design/mdx/preview/context/element';
import { useStage } from 'design/mdx/preview/context/stage';
import { propsOf } from './props-of';

const useFigure = () => {
  const preview = usePreviewContext();
  const { setElement } = useElement();
  const { dark } = useStage();
  const { applied, controls, extras, hasControls, literals, values } = preview;

  return {
    dark,
    key: preview.replay
      ? JSON.stringify(
          Object.entries(applied).filter(([name]) => {
            return !controls[name]?.live;
          })
        )
      : undefined,
    preset: preview.preset,
    props: hasControls
      ? { ...extras, ...propsOf(controls, values, literals, preview.set) }
      : {},
    setElement,
    span: preview.span,
  };
};

export { useFigure };
