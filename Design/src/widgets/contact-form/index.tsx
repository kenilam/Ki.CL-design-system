import React from 'react';

// Libraries
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

// Components
import { Button, Form, Status, Text } from 'design/components';

// Icons
import * as Ri from 'react-icons/ri';

// Partials
import { Email } from './email';
import { Message } from './message';

// Constants
import { CLASS_NAME } from './constants';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Spec
import type { Props, Values } from './spec';

const ContactForm: React.FunctionComponent<Props> = ({
  className,
  email = '',
  onSubmit,
}) => {
  const t = useCopy();

  const form = useForm<Values>({
    defaultValues: { Email: email, Message: '' },
  });

  const { errors, isSubmitSuccessful, isSubmitting } = form.formState;

  const submit = form.handleSubmit(async (values) => {
    try {
      await onSubmit(values);
    } catch (error) {
      form.setError('root', {
        message:
          (error instanceof Error && error.message) || t('error_not_sent'),
      });
    }
  });

  if (isSubmitSuccessful) {
    return (
      <Status
        className={className}
        level='info'
        message={t('sent_to', { email: form.getValues('Email') })}
        title={t('message_sent')}
      />
    );
  }

  return (
    <Form
      {...form}
      className={classNames(CLASS_NAME, className)}
      onSubmit={submit}
    >
      <Email />
      <Message />
      {errors.root?.message ? (
        <Text
          className={classNames('kicl-font-size-small', 'kicl-color-error')}
          is='p'
          role='alert'
        >
          {errors.root.message}
        </Text>
      ) : null}
      <Button
        after={
          isSubmitting ? (
            <Ri.RiLoader4Line aria-hidden className='is-revolving' />
          ) : null
        }
        disabled={isSubmitting}
        size='small'
        type='submit'
      >
        {t('action_send')}
      </Button>
    </Form>
  );
};

type ContactFormProps = Props;
type ContactFormValues = Values;

export { ContactForm, type ContactFormProps, type ContactFormValues };
