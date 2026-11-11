/** Another origin's stylesheet throws on `cssRules`. */
export const readStyles = () => {
  return Array.from(document.styleSheets)
    .flatMap((sheet) => {
      try {
        return Array.from(sheet.cssRules, (rule) => {
          return rule.cssText;
        });
      } catch {
        return [];
      }
    })
    .join('\n');
};
