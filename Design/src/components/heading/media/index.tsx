import React, { PropsWithChildren } from 'react';

import type * as Spec from 'design/components/heading/spec';

import './styles.scss';

import { CLASS_NAME } from 'design/components/heading/constants';

type Props = PropsWithChildren<Required<Pick<Spec.Props, 'media'>>>;

const Media: React.FunctionComponent<Props> = ({ children, media }) => {
  return (
    <>
      <span aria-hidden className={`${CLASS_NAME}__media`}>
        {media}
      </span>
      <span className={`${CLASS_NAME}__text`}>{children}</span>
    </>
  );
};

export { Media };
