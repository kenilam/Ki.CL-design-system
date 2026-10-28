import React from 'react';

// Libraries
import classNames from 'classnames';

// Components
import { Animation, Heading, Layout, Text } from 'design/components';
import type { HeadingProps } from 'design/components';

// Copy
import { useCopy } from 'design/locales/use-copy';

// Icons
import * as Ri from 'react-icons/ri';

// Spec
import * as Spec from './spec';

const CLASS_NAME = 'kicl--components--status';

const LEVELS: Spec.Icons = {
  error: (
    <Ri.RiErrorWarningLine
      aria-hidden
      className='kicl-font-size kicl-color-error'
    />
  ),
  info: (
    <Ri.RiInformationLine
      aria-hidden
      className='kicl-font-size kicl-color-info'
    />
  ),
  warning: (
    <Ri.RiAlarmWarningLine
      aria-hidden
      className='kicl-font-size kicl-color-warning'
    />
  ),
};

const Status: React.FunctionComponent<Spec.Props> = ({
  property = 'slide-from-bottom',
  className: _className,
  headingLevel = 'h4',
  in: transitionIn,
  justifyContent = 'start',
  level,
  message,
  title,
  ...rest
}) => {
  const t = useCopy();

  const className = classNames({
    [`kicl-color-${level}`]: level,
    [`kicl-text-align-${justifyContent}`]: justifyContent,
  });

  const Icon = level ? LEVELS[level] : null;

  // A message alone carries the icon itself. The level's default title only
  // shows when there is nothing else to read.
  const hasTitle = Boolean(title) || !message;

  const Title = hasTitle ? (
    <Layout
      alignContent='center'
      alignItems='center'
      autoFlow='column'
      gap='narrow'
      justifyContent={justifyContent}
    >
      <Heading
        dense
        {...({ is: headingLevel, lookLike: 'h4' } as HeadingProps)}
      >
        {Icon}
        {title || t(`title_${level ?? 'error'}`)}
      </Heading>
    </Layout>
  ) : null;

  const Messages = message ? (
    <Layout
      alignItems='center'
      autoFlow='column'
      gap='narrow'
      justifyContent={justifyContent}
    >
      <Text
        className={classNames('kicl-font-size-small', 'kicl-color-grey-700')}
        is='p'
      >
        {hasTitle ? null : Icon}
        {message}
      </Text>
    </Layout>
  ) : null;

  return (
    <div
      className={classNames(CLASS_NAME, _className)}
      role={level === 'error' ? 'alert' : 'status'}
    >
      <Animation {...rest} property={property} in={transitionIn}>
        <section className={className}>
          {Title}
          {Messages}
        </section>
      </Animation>
    </div>
  );
};

type StatusProps = Spec.Props;

export { Status, type StatusProps };
