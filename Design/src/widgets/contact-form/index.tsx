import React from 'react';

// Libraries
import classNames from 'classnames';
import { useForm } from 'react-hook-form';

// Components
import { Button, Form, Status, Text } from '../../components';

// Icons
import * as Ri from 'react-icons/ri';

// Partials
import { Email } from './email';
import { Message } from './message';

// Constants
import { CLASS_NAME, COPY } from './constants';

// Spec
import type { Props, Values } from './spec';

/**
 * A message to the site's owner, in place of a published address. The form is
 * sending while `onSubmit` is pending, replaced by a confirmation when it
 * resolves, and shows the error over the button when it rejects.
 */
const ContactForm: React.FunctionComponent<Props> = ({
  className,
  email = '',
  onSubmit,
}) => {
  const form = useForm<Values>({
    defaultValues: { Email: email, Message: '' },
  });

  const { errors, isSubmitSuccessful, isSubmitting } = form.formState;

  const submit = form.handleSubmit(async (values) => {
    try {
      await onSubmit(values);
    } catch (error) {
      form.setError('root', {
        message: (error instanceof Error && error.message) || COPY.failed,
      });
    }
  });

  if (isSubmitSuccessful) {
    return (
      <Status
        className={className}
        level='info'
        message={COPY.sentTo(form.getValues('Email'))}
        title={COPY.sent}
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
      {errors.root?.message && (
        <Text
          className={classNames('kicl-font-size-small', 'kicl-color-error')}
          is='p'
          role='alert'
        >
          {errors.root.message}
        </Text>
      )}
      <Button
        after={
          isSubmitting && (
            <Ri.RiLoader4Line aria-hidden className='is-revolving' />
          )
        }
        disabled={isSubmitting}
        size='small'
        type='submit'
      >
        {COPY.send}
      </Button>
    </Form>
  );
};

type ContactFormProps = Props;
type ContactFormValues = Values;

export { ContactForm, type ContactFormProps, type ContactFormValues };
