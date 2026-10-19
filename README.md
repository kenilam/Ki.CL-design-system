# Ki.CL design system

The components, styles, icons and widgets that [Ki.CL](https://github.com/kenilam/Ki.CL) renders, built as a Module Federation remote named `design`. The host loads it at runtime the same way it loads the API client from [Ki.CL-back](https://github.com/kenilam/Ki.CL-back).

## Run it

```bash
cp .env.template .env   # NODE_ENV, PORT (3200 by default)
make start              # install, serve the remote with Vite
```

The remote is at `http://localhost:3200/design/remoteEntry.js`, and its types are at `/design/types.zip`.

| Command | What it does |
| --- | --- |
| `make run` | Serve the remote and its types with Vite, with hot updates in the host |
| `make build` | Build `Design/dist` only |
| `make lint` | oxlint and stylelint |
| `make typecheck` | `tsc --noEmit` on `Design` |

## What it exposes

| Module | Source |
| --- | --- |
| `design/components` | `Design/src/components` |
| `design/core` | `Design/src/core`: the reset, tokens and `kicl-*` utilities. Import it once, before anything else. |
| `design/core/constants` | `Design/src/core/constants.ts` |
| `design/docs` | `Docs`: a home page and a page for each component, each with a live preview, presets and their code. A host mounts it under any route that ends in a splat, such as `<Route path='design-system/*' element={<Docs />} />` |
| `design/hooks` | `useResponsive`, `useResizeObserver`, `useClipboard` |
| `design/icons` | `Company`, `Logo`, `Menu` and the `IconType` type |
| `design/router` | The `Router`, `MatchedRoute`, `useMatchPattern`, and the `react-router-dom` APIs the site uses |
| `design/status` | The HTTP status pages and the route `ErrorElement` |
| `design/widgets` | `GlobalHeader`, `SiteLogo` and `ContactForm` |

All the CSS goes out as one stylesheet (`bundleAllCSS`). It loads with whichever module the host imports first.

`react`, `react-dom`, `react-router-dom`, `react-hook-form`, `i18next` and `react-i18next` are shared singletons. Views import routing from `design/router`, never from `react-router-dom` directly. Inside this repo, `HyperLink` and the status pages import `react-router-dom` directly, because importing `router` from inside `components` would create an import cycle through `MatchedRoute`. The host has to share the same six. `HyperLink` and the status pages use the host's router context, the form components use the form context a view creates with `useForm`, and the copy comes from the host's i18next.

## Decisions

- **Icon sets aren't re-exported.** Exposing `Ri` or `Fa` as a namespace ships every icon in the set, which made the components chunk 13.8 MB. Components import the icons they use from `react-icons`, and the host does the same.
- **Sass stays inside this repo.** The partials in `Design/src/**/_*.scss` are prepended to every stylesheet here, as they were in the host. The host never sees them. Its views use the runtime tokens: `--kicl-color-*`, the `kicl-*` utilities, and the `--kicl-viewport-*` flags for style queries.
- **Paper is part of the system.** `core/styles/print.scss` sets type in points, so everything in rem follows it, sets the page margin, and hides what only a screen can use: anything with `kicl-print-hidden`, which the global header and the `Details` marker carry. Every `Details` prints open, whatever state it is in. `useResponsive` takes the dark theme off for the print. A view that needs another size on paper sets `--kicl-print-font-size` on `:root`.
- **No copy in components.** Every label, placeholder and message is a key in `Design/src/locales/en/design.json`, read with `useCopy` from `Design/src/locales/use-copy.ts`. With a host, the text comes from the `design` namespace in its database, seeded with `make translations.seed DIR=../Ki.CL-design-system/Design/src/locales` in Ki.CL-back. With no host, or for a key the database does not have yet, it is the English in the build. `useCopy` never suspends, because components render inside spinners and outside any route.
- **Docs are MDX beside each component, and they present rather than explain.** A component's page is `Design/src/components/<name>/docs/index.mdx`, loaded when it is opened, and listed once its folder is in a group in `Design/src/docs/constants.ts`. A page is a lead sentence and one `<Preview>`: the example on a stage, a dropdown of presets, a toggle for each prop in the page's `docs/controls.ts`, and the code for what is shown. Each preset is a folder in `docs/`: `preview.tsx` is the example, a component named `Preview` that spreads the props it is given last on the page's component, and `preset.tsx` wraps it in a `<Preset>` with the file itself, read with `?raw`, as the code. The code shows the component under the preset's name with the chosen props written on that tag, so the file and the code can't disagree. The routes are relative, so the docs work under whatever path the host mounts them on.
- **Cascade layers match the host.** `Design/scripts/get-style-layer.ts` and Ki.CL's `App/.client/helper/get-style-layer.ts` must list the same layers in the same order. Both stylesheets end up on one page, and the first layer order the browser sees applies to both.

## Hosting

It's set up the same way as Ki.CL-back. The `Dockerfile` builds the remote into the image, and `Server/index.ts` serves it on Cloud Run under `/design`. The service only accepts internal traffic and only the host's service account may call it, so it has no CORS: browsers always load it through the host's same-origin `/design` proxy. `remoteEntry.js` is served `no-cache` and the hashed assets as immutable.
