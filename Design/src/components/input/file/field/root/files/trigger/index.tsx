import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button, PopoverTrigger, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Context
import { useFieldContext } from 'design/components/input/file/field/context';

const Trigger: React.FunctionComponent = () => {
  const t = useCopy();
  const { files } = useFieldContext();

  return (
    <PopoverTrigger asChild>
      <Button
        after={<Tb.TbChevronDown aria-hidden />}
        before={<Tb.TbFile aria-hidden />}
        className={classNames('kicl-font-size-small', 'kicl-text-truncate')}
        size='small'
        type='button'
        variant='tertiary'
      >
        <Text
          is='span'
          className={classNames(
            'kicl-text-transform-none',
            'kicl-text-truncate'
          )}
        >
          {files.length === 1
            ? files[0].name
            : t('file_input_files', { count: files.length })}
        </Text>
      </Button>
    </PopoverTrigger>
  );
};

export { Trigger };
