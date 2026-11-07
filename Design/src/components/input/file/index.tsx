import React, { useRef, useState } from 'react';

// Libraries
import classNames from 'classnames';
import i18next from 'i18next';

// Components
import { Button } from 'design/components/button';
import { FormItem } from 'design/components/form';
import { useFormItemControl } from 'design/components';
import { InputGroup, InputGroupInput } from 'design/components/input-group';
import { Layout } from 'design/components/layout';
import { List } from 'design/components/list';
import { ListItem } from 'design/components/list-item';
import { Markdown } from 'design/components/markdown';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from 'design/components/popover';
import { Text } from 'design/components/text';

// Helpers
import { mergeRefs } from 'design/helper';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import type { FormItemFieldProps } from 'design/components/form';
import type { InputProps } from 'design/components/input';

// Styles
import './styles.scss';

const CLASS_NAME = 'kicl--components--input--file';

const MEGABYTE = 1024 * 1024;

type Props = Omit<InputProps, 'before' | 'type' | keyof FormItemFieldProps> &
  FormItemFieldProps & {
    inline?: boolean;
  };

const sizeOf = (bytes: number) => {
  const megabytes = bytes >= MEGABYTE;

  return new Intl.NumberFormat(i18next.language, {
    maximumFractionDigits: 1,
    style: 'unit',
    unit: megabytes ? 'megabyte' : 'kilobyte',
  }).format(megabytes ? bytes / MEGABYTE : bytes / 1024);
};

const FileInput = React.forwardRef<HTMLInputElement, Props>(
  ({ description, label, layout, ...props }, ref): React.ReactElement => {
    const {
      after,
      className,
      disabled,
      inline,
      multiple,
      onChange,
      style,
      ...rest
    } = props;
    const control = useFormItemControl(props);
    const t = useCopy();
    const node = useRef<HTMLInputElement | null>(null);
    const [files, setFiles] = useState<File[]>([]);
    const [dragging, setDragging] = useState(false);

    if (label || description) {
      return (
        <FormItem
          {...layout}
          description={description}
          label={label}
          required={props.required}
        >
          <FileInput {...props} ref={ref} />
        </FormItem>
      );
    }

    if (inline) {
      const group = classNames(`${CLASS_NAME}--inline`, className);
      const field = (
        <>
          <Ri.RiFileUploadLine aria-hidden />
          <InputGroupInput
            {...rest}
            disabled={disabled}
            multiple={multiple}
            onChange={onChange}
            ref={ref}
            type='file'
          />
        </>
      );

      if (after) {
        return (
          <InputGroup className={group} disabled={disabled} style={style}>
            {field}
            {after}
          </InputGroup>
        );
      }

      return (
        <InputGroup className={group} is='label' style={style}>
          {field}
        </InputGroup>
      );
    }

    const change = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDragging(false);
      setFiles(Array.from(event.target.files ?? []));
      onChange?.(event);
    };

    const remove = (index: number) => {
      const element = node.current;

      if (!element) {
        return;
      }

      const kept = new DataTransfer();

      files
        .filter((_, at) => at !== index)
        .forEach((file) => kept.items.add(file));

      element.files = kept.files;
      element.dispatchEvent(new Event('change', { bubbles: true }));
      element.focus();
    };

    return (
      <Layout autoFlow='row' gap='narrow'>
        <fieldset className={`${CLASS_NAME}__field`} disabled={disabled}>
          <Layout
            alignContent='center'
            gap='narrow'
            justifyItems='center'
            autoFlow='row'
          >
            <label
              className={classNames(
                CLASS_NAME,
                { [`${CLASS_NAME}--dragging`]: dragging },
                'kicl-backdrop-blur',
                'kicl-padding',
                'kicl-position-relative',
                'kicl-text-align-center',
                className
              )}
              style={style}
            >
              <input
                {...rest}
                {...control}
                className={classNames(
                  `${CLASS_NAME}__control`,
                  'kicl-inset-0',
                  'kicl-position-absolute'
                )}
                multiple={multiple}
                onChange={change}
                onDragEnter={() => setDragging(true)}
                onDragLeave={() => setDragging(false)}
                onDrop={() => setDragging(false)}
                ref={mergeRefs(node, ref)}
                title={rest.title ?? ''}
                type='file'
              />
              <Ri.RiFileAddLine aria-hidden className='kicl-font-size-larger' />
              <Text is='span' className='kicl-font-size-small'>
                <Markdown>
                  {t(multiple ? 'file_input_drop_multiple' : 'file_input_drop')}
                </Markdown>
              </Text>
            </label>
          </Layout>
          {files.length ? (
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  after={<Ri.RiArrowDownSLine aria-hidden />}
                  before={<Ri.RiFileLine aria-hidden />}
                  className='kicl-text-truncate'
                  size='small'
                  type='button'
                  variant='tertiary'
                >
                  <Text
                    is='span'
                    className='kicl-text-transform-none kicl-text-truncate'
                  >
                    {files.length === 1
                      ? files[0].name
                      : t('file_input_files', { count: files.length })}
                  </Text>
                </Button>
              </PopoverTrigger>
              <PopoverContent
                className={`${CLASS_NAME}__files`}
                placement='block-end-start'
              >
                <List gap='narrowest'>
                  {files.map((file, index) => (
                    <ListItem
                      alignItems='center'
                      autoFlow='column'
                      className={classNames(
                        `${CLASS_NAME}__file`,
                        'kicl-padding-narrow'
                      )}
                      frames='max-content--auto--max-content'
                      gap='narrow'
                      key={`${file.name}-${file.lastModified}`}
                    >
                      <Ri.RiFileLine aria-hidden />
                      <span className='kicl-overflow-hidden'>
                        <Text
                          is='span'
                          className='kicl-display-block kicl-font-size-small kicl-text-truncate'
                        >
                          {file.name}
                        </Text>
                        <Text
                          is='span'
                          className='kicl-display-block kicl-font-size-smaller'
                          variant='secondary'
                        >
                          {sizeOf(file.size)}
                        </Text>
                      </span>
                      <Button
                        aria-label={t('action_remove_file', {
                          name: file.name,
                        })}
                        onClick={() => remove(index)}
                        size='small'
                        type='button'
                        variant='tertiary'
                      >
                        <Ri.RiCloseLine aria-hidden />
                      </Button>
                    </ListItem>
                  ))}
                </List>
              </PopoverContent>
            </Popover>
          ) : null}
        </fieldset>
      </Layout>
    );
  }
);

FileInput.displayName = 'FileInput';

export { FileInput };
