import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Markdown, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Partials
import { useFieldContext } from 'design/components/input/file/field/context';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/input/file/constants';

const Prompt: React.FunctionComponent = () => {
  const t = useCopy();
  const { multiple } = useFieldContext();

  return (
    <>
      <Tb.TbFilePlus aria-hidden className='kicl-font-size-larger' />
      <Text
        is='span'
        className={classNames(`${CLASS_NAME}__prompt`, 'kicl-font-size-small')}
      >
        <Markdown>
          {t(multiple ? 'file_input_drop_multiple' : 'file_input_drop')}
        </Markdown>
      </Text>
    </>
  );
};

export { Prompt };
