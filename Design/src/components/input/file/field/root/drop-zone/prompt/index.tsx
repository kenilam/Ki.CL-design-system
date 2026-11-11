import React from 'react';

// Components
import { Markdown, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Partials
import { useFieldContext } from 'design/components/input/file/field/context';

const Prompt: React.FunctionComponent = () => {
  const t = useCopy();
  const { multiple } = useFieldContext();

  return (
    <>
      <Tb.TbFilePlus aria-hidden className='kicl-font-size-larger' />
      <Text is='span' className='kicl-font-size-small'>
        <Markdown>
          {t(multiple ? 'file_input_drop_multiple' : 'file_input_drop')}
        </Markdown>
      </Text>
    </>
  );
};

export { Prompt };
