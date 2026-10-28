import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  Card,
  CardTitle,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Spinner,
  Status,
  Text,
  Textarea,
} from 'design/components';

type Values = { message: string };
type Phase = 'idle' | 'sending' | 'failed' | 'sent';

const Preview: React.FC = () => {
  const [phase, setPhase] = useState<Phase>('idle');
  const [tries, setTries] = useState(0);
  const form = useForm<Values>({
    defaultValues: { message: 'Hi, can I change my delivery address?' },
  });

  const send = () => {
    setPhase('sending');
    setTimeout(() => {
      setPhase(tries === 0 ? 'failed' : 'sent');
      setTries(tries + 1);
    }, 1200);
  };

  const reset = () => {
    form.reset();
    setPhase('idle');
    setTries(0);
  };

  return (
    <Card
      is='section'
      header={<CardTitle is='h3'>Message us</CardTitle>}
      size={5}
    >
      {phase === 'sent' ? (
        <>
          <Text level='confirm' role='status'>
            Sent. We reply within two working days.
          </Text>
          <Button onClick={reset} variant='secondary'>
            Send another
          </Button>
        </>
      ) : (
        <Form {...form} onSubmit={form.handleSubmit(send)}>
          <FormField
            control={form.control}
            name='message'
            rules={{ required: 'Write a message' }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            aria-disabled={phase === 'sending'}
            before={
              phase === 'sending' ? <Spinner position='inline' /> : undefined
            }
            type='submit'
          >
            {phase === 'sending'
              ? 'Sending'
              : phase === 'failed'
                ? 'Try again'
                : 'Send'}
          </Button>
          {phase === 'failed' && (
            <Status
              level='error'
              message="It didn't reach us. Check your connection and try again."
              title='Not sent'
            />
          )}
        </Form>
      )}
    </Card>
  );
};

export { Preview };
