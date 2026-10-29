import { lazy } from 'react';

/**
 * Every docs page by category, in the sidebar's order, as in Uber's Base.
 * Each page loads when it is opened, not with the remote.
 */
export const PAGES = {
  action: {
    button: {
      context: 'button',
      Content: lazy(() => import('design/components/button/docs/index.mdx')),
    },
    'hyper-link': {
      context: 'hyper_link',
      Content: lazy(
        () => import('design/components/hyper-link/docs/index.mdx')
      ),
    },
  },
  input: {
    input: {
      context: 'input',
      Content: lazy(() => import('design/components/input/docs/index.mdx')),
    },
    'input-group': {
      context: 'input_group',
      Content: lazy(
        () => import('design/components/input-group/docs/index.mdx')
      ),
    },
    textarea: {
      context: 'textarea',
      Content: lazy(() => import('design/components/textarea/docs/index.mdx')),
    },
    checkbox: {
      context: 'checkbox',
      Content: lazy(() => import('design/components/checkbox/docs/index.mdx')),
    },
    'radio-group': {
      context: 'radio_group',
      Content: lazy(
        () => import('design/components/radio-group/docs/index.mdx')
      ),
    },
    switch: {
      context: 'switch',
      Content: lazy(() => import('design/components/switch/docs/index.mdx')),
    },
    segmented: {
      context: 'segmented',
      Content: lazy(() => import('design/components/segmented/docs/index.mdx')),
    },
    select: {
      context: 'select',
      Content: lazy(() => import('design/components/select/docs/index.mdx')),
    },
    combobox: {
      context: 'combobox',
      Content: lazy(() => import('design/components/combobox/docs/index.mdx')),
    },
    'date-picker': {
      context: 'date_picker',
      Content: lazy(
        () => import('design/components/date-picker/docs/index.mdx')
      ),
    },
    calendar: {
      context: 'calendar',
      Content: lazy(() => import('design/components/calendar/docs/index.mdx')),
    },
    form: {
      context: 'form',
      Content: lazy(() => import('design/components/form/docs/index.mdx')),
    },
  },
  display: {
    text: {
      context: 'text',
      Content: lazy(() => import('design/components/text/docs/index.mdx')),
    },
    heading: {
      context: 'heading',
      Content: lazy(() => import('design/components/heading/docs/index.mdx')),
    },
    markdown: {
      context: 'markdown',
      Content: lazy(() => import('design/components/markdown/docs/index.mdx')),
    },
    badge: {
      context: 'badge',
      Content: lazy(() => import('design/components/badge/docs/index.mdx')),
    },
    list: {
      context: 'list',
      Content: lazy(() => import('design/components/list/docs/index.mdx')),
    },
    image: {
      context: 'image',
      Content: lazy(() => import('design/components/image/docs/index.mdx')),
    },
    video: {
      context: 'video',
      Content: lazy(() => import('design/components/video/docs/index.mdx')),
    },
    diagram: {
      context: 'diagram',
      Content: lazy(() => import('design/components/diagram/docs/index.mdx')),
    },
    'animated-text': {
      context: 'animated_text',
      Content: lazy(
        () => import('design/components/animated-text/docs/index.mdx')
      ),
    },
  },
  feedback: {
    spinner: {
      context: 'spinner',
      Content: lazy(() => import('design/components/spinner/docs/index.mdx')),
    },
    skeleton: {
      context: 'skeleton',
      Content: lazy(() => import('design/components/skeleton/docs/index.mdx')),
    },
    status: {
      context: 'status',
      Content: lazy(() => import('design/components/status/docs/index.mdx')),
    },
    bubble: {
      context: 'bubble',
      Content: lazy(() => import('design/components/bubble/docs/index.mdx')),
    },
    'scroll-indicator': {
      context: 'scroll_indicator',
      Content: lazy(
        () => import('design/components/scroll-indicator/docs/index.mdx')
      ),
    },
  },
  surfaces: {
    card: {
      context: 'card',
      Content: lazy(() => import('design/components/card/docs/index.mdx')),
    },
    dialog: {
      context: 'dialog',
      Content: lazy(() => import('design/components/dialog/docs/index.mdx')),
    },
    sheet: {
      context: 'sheet',
      Content: lazy(() => import('design/components/sheet/docs/index.mdx')),
    },
    popover: {
      context: 'popover',
      Content: lazy(() => import('design/components/popover/docs/index.mdx')),
    },
    details: {
      context: 'details',
      Content: lazy(() => import('design/components/details/docs/index.mdx')),
    },
    frame: {
      context: 'frame',
      Content: lazy(() => import('design/components/frame/docs/index.mdx')),
    },
  },
  navigation: {
    breadcrumb: {
      context: 'breadcrumb',
      Content: lazy(
        () => import('design/components/breadcrumb/docs/index.mdx')
      ),
    },
    navigation: {
      context: 'navigation',
      Content: lazy(
        () => import('design/components/navigation/docs/index.mdx')
      ),
    },
    menu: {
      context: 'menu',
      Content: lazy(() => import('design/components/menu/docs/index.mdx')),
    },
    'page-indicator': {
      context: 'page_indicator',
      Content: lazy(
        () => import('design/components/page-indicator/docs/index.mdx')
      ),
    },
  },
  layout: {
    layout: {
      context: 'layout',
      Content: lazy(() => import('design/components/layout/docs/index.mdx')),
    },
    separator: {
      context: 'separator',
      Content: lazy(() => import('design/components/separator/docs/index.mdx')),
    },
    animation: {
      context: 'animation',
      Content: lazy(() => import('design/components/animation/docs/index.mdx')),
    },
  },
} as const;

export type Category = keyof typeof PAGES;
export type Component = {
  [C in Category]: (typeof PAGES)[C][keyof (typeof PAGES)[C]];
}[Category];
