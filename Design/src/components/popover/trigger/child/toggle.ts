export const toggle = (panel: HTMLElement, source: HTMLElement) => {
  const popover = panel as HTMLElement & {
    togglePopover: (options?: { source?: HTMLElement }) => boolean;
  };

  /*
   * With `source` the browser treats the trigger as the invoker, so a second
   * click isn't an outside click that dismisses and reopens. Older browsers
   * reject the option.
   */
  try {
    popover.togglePopover({ source });
  } catch {
    popover.togglePopover();
  }
};
