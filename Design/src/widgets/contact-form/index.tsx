import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Form, FormMessage, Status, useForm } from 'design/components';

// Partials
import { Email } from './email';
import { Message } from './message';
import { Send } from './send';

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
    defaultValues: { email, message: '' },
  });

  const { isSubmitSuccessful } = form.formState;

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
        message={t('sent_to', { email: form.getValues('email') })}
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
      <FormMessage name='root' />
      <Send />
    </Form>
  );
};

type ContactFormProps = Props;
type ContactFormValues = Values;

export { ContactForm, type ContactFormProps, type ContactFormValues };
