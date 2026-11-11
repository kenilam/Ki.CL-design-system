import React, { createContext, useContext, useId } from 'react';

// Spec
import type { FormItemProps } from 'design/components/form/spec';

type FormItemContextValue = {
  descriptionId?: string;
  id: string;
  messageId: string;
  required?: boolean;
};

const FormItemContext = createContext<FormItemContextValue | null>(null);

type Props = React.PropsWithChildren<
  Pick<FormItemProps, 'required'> & {
    described: boolean;
  }
>;

const Provider: React.FunctionComponent<Props> = ({
  children,
  described,
  required,
}) => {
  const id = useId();

  return (
    <FormItemContext.Provider
      value={{
        descriptionId: described ? `${id}-description` : undefined,
        id,
        messageId: `${id}-message`,
        required,
      }}
    >
      {children}
    </FormItemContext.Provider>
  );
};

const useFormItem = () => {
  return useContext(FormItemContext);
};

export { Provider, useFormItem };
