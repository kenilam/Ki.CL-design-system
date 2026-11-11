import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Button, ListItem, Text } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Tb from 'react-icons/tb';

// Partials
import { useFieldContext } from 'design/components/input/file/field/context';
import { sizeOf } from './size-of';

// Constants
import { CLASS_NAME } from 'design/components/input/file/constants';

type Props = { id: string };

const File: React.FunctionComponent<Props> = ({ id }) => {
  const t = useCopy();
  const { files, remove } = useFieldContext();
  const index = files.findIndex((item) => {
    return `${item.name}-${item.lastModified}` === id;
  });
  const file = files[index];

  if (!file) {
    return null;
  }

  return (
    <ListItem
      alignItems='center'
      autoFlow='column'
      className={classNames(`${CLASS_NAME}__file`, 'kicl-padding-narrow')}
      frames='max-content--auto--max-content'
      gap='narrow'
    >
      <Tb.TbFile aria-hidden />
      <span className='kicl-overflow-hidden'>
        <Text
          is='span'
          className={classNames(
            'kicl-display-block',
            'kicl-font-size-small',
            'kicl-text-truncate'
          )}
        >
          {file.name}
        </Text>
        <Text
          is='span'
          className={classNames('kicl-display-block', 'kicl-font-size-smaller')}
          variant='secondary'
        >
          {sizeOf(file.size)}
        </Text>
      </span>
      <Button
        aria-label={t('action_remove_file', { name: file.name })}
        onClick={() => remove(index)}
        size='small'
        type='button'
        variant='tertiary'
      >
        <Tb.TbX aria-hidden />
      </Button>
    </ListItem>
  );
};

export { File };
