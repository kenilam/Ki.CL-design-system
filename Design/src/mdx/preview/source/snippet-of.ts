const indent = (body: string, by: string) => {
  return body.replace(/^(?=.)/gm, by);
};

export const snippetOf = (source: string) => {
  return source
    .replace(/^import React from 'react';\n/m, '')
    .replace(/^import React, \{/m, 'import {')
    .replace(/^import type [^;]*;\n/gm, '')
    .replace(/^export \{ Preview \};\n?/m, '')
    .replace(/^const Preview(?::[^=]+)? = /m, 'const Preview = ')
    .replace(/^const Preview = \(props\)/m, 'const Preview = ()')
    .replace(/^(const Preview = \(\{.*), \.\.\.props \}\)/m, '$1 })')
    .replace(
      /^(const Preview = \(.*\)) =>\s*\(\n([\s\S]*?)\n\);$/m,
      (_, head: string, body: string) => {
        return `${head} => {\n  return (\n${indent(body, '  ')}\n  );\n};`;
      }
    )
    .replace(
      /^(const Preview = \(.*\)) => (<.*>);$/m,
      (_, head: string, body: string) => {
        return `${head} => {\n  return (\n    ${body}\n  );\n};`;
      }
    )
    .replace(/\n{3,}/g, '\n\n')
    .trim();
};
