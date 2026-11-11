# CLAUDE.md

Ki.CL's design system, built as the Module Federation remote `design`. See README.md for commands, exposes and hosting.

## Layout

- `Design/` is the federated package (`@ki-cl/design`). Source lives in `Design/src`, the Vite config in `Design/vite.config.ts`, and the cascade layers in `Design/scripts/get-style-layer.ts`.
- `Server/` is the Express server that serves `Design/dist` at `/design`. It has no CORS: the service is internal-only and the host proxies it same-origin.
- Imports inside `Design/src` that leave the folder use the `design/*` alias (`design/components`, `design/locales/use-copy`); same-folder imports stay `./`. The alias is the remote's own name on purpose: the generated types keep import paths as written, and every host already maps `design/*` to `@mf-types/design/*`, with a fallback to `compiled-types/src/*` for paths that are not an exposed module. Any other alias would resolve to nothing in the host.

## Rules

- The design-system rules in Ki.CL's CLAUDE.md apply here too: semantic markup, HTML and CSS before JS with JS as the last resort, no custom CSS a component or utility already covers, no extra wrappers, tokens over magic numbers, widths from the 12-column scale, and types inferred rather than restated.
- No cross imports. A component never imports from a sibling component's folder. One component reaches another through the `design/components` barrel, which exports what siblings share (props types, value lists, `usePopover`, `useFormItemControl`), and shared value lists live in `components/spec.ts`. The docs kit every component's docs use (`Copy`, `Preview`, the docs context) is `src/mdx/`, and the docs page lists are `src/component-pages.ts`, `src/pattern-pages.ts` and `src/token-pages.ts`.
- No prop drilling. A component reads what it needs from its context, the route or `useCopy`, and builds its own value. A component with parts (a trigger, a panel, an item) shares its state through its own small context, and each part is its own file.
- Structure, file length and class names follow "Structure" in Ki.CL's CLAUDE.md: one part per file, under about 80 lines, and more than one class through `classNames('a', 'b')`, never a space-separated string or a template literal. Docs components follow the same rules, lists included: a palette, a sidebar category or a search result list is a plural part and an item part. A `preview.tsx` stays whole, because it's read with `?raw` and shown as the example's code.
- Each exposed module is a public API. If you rename or remove an export, the host has to change in the same release.
- Don't re-export a third-party namespace (`react-icons/tb` and the like). Everything in it ships to the host.
- Icons come from Tabler Icons only (`import * as Tb from 'react-icons/tb'`), the same set as the host and moonshot. Tabler draws its outline icons with strokes and sets `fill="none"` on the `svg`, so never set `fill` on an icon in CSS: it overrides that attribute and turns the outline into a solid shape. This is why the global rule is `svg:not([fill])`.
- A package that holds React context or an instance the host also uses (router, forms, i18next) has to be a `shared` singleton here and in the host. The design system is also the one place the other repos import these from: `design/router` for routing, `design/components` for forms (`useForm`, `useFormContext`, `useFormState`, `useWatch`, `valibotResolver` and the form types), `design/hooks` for `useTranslation` and `TFunction`. When a host needs another piece of a shared library, add a named re-export here instead of importing the package there.
- No copy in components: visible text, `aria-label`, `alt`, `placeholder` and messages are keys in `Design/src/locales/en-US/design.json`, read with `useCopy` from `Design/src/locales/use-copy.ts`. Keys are flat, lower case with underscores, and values that come from code are templated (`{{email}}`). The namespace can't use the host's `common`, because the design system also renders with no host. Seed the database after changing a key (README, Decisions). The docs' prose is the exception: MDX pages and preset descriptions read keys from `Design/src/locales/en-US/design-docs.json` with `Copy` from `Design/src/mdx/copy.tsx`.
- Keep `LAYERS` in `Design/scripts/get-style-layer.ts` the same as in Ki.CL's `App/.client/helper/get-style-layer.ts`.
- Single quotes, named exports only. Files and folders are lowercase with dashes.
- Git: same strategy as Ki.CL. Squash into `develop`. The Release workflow fast-forwards `main` to `develop`.
