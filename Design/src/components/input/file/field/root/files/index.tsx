import React from 'react';

// Components
import { List, Popover, PopoverContent } from 'design/components';

// Partials
import { useFieldContext } from 'design/components/input/file/field/context';
import { File } from './file';
import { Trigger } from './trigger';

// Styles
import './styles.scss';

// Constants
import { CLASS_NAME } from 'design/components/input/file/constants';

const Files: React.FunctionComponent = () => {
  const { files } = useFieldContext();

  if (!files.length) {
    return null;
  }

  return (
    <Popover>
      <Trigger />
      <PopoverContent
        className={`${CLASS_NAME}__files`}
        placement='block-end-start'
      >
        <List gap='narrowest'>
          {files.map(({ lastModified, name }) => {
            const id = `${name}-${lastModified}`;

            return <File id={id} key={id} />;
          })}
        </List>
      </PopoverContent>
    </Popover>
  );
};

export { Files };
