import React from 'react';

// Spec
import * as Spec from './spec';

// Styles
import './styles.scss';

// Partials
import { Provider } from './context';
import { Root } from './root';

const HyperLink = React.forwardRef<HTMLAnchorElement, Spec.Props>(
  ({ after, before, children, lookLikeButton, target, ...rest }, ref) => {
    return (
      <Provider
        after={after}
        before={before}
        contents={children}
        lookLikeButton={lookLikeButton}
        target={target}
        to={rest.to}
      >
        <Root {...rest} ref={ref} />
      </Provider>
    );
  }
);

HyperLink.displayName = 'HyperLink';

type HyperLinkProps = Spec.Props;

type GetHyperLinkClassNamesProps = Spec.GetHyperLinkClassNamesProps;

export { HyperLink, type GetHyperLinkClassNamesProps, type HyperLinkProps };
