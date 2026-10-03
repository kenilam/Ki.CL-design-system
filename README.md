# Ki.CL design system

The components, styles, icons and widgets that [Ki.CL](https://github.com/kenilam/Ki.CL) renders, built as a Module Federation remote named `design`. The host loads it at runtime the same way it loads the API client from [Ki.CL-back](https://github.com/kenilam/Ki.CL-back).

## Run it

```bash
cp .env.template .env   # NODE_ENV, PORT (3200 by default)
make start              # install, build the remote, serve it
```

The remote is at `http://localhost:3200/design/remoteEntry.js`, and its types are at `/design/@mf-types.zip`.

| Command | What it does |
| --- | --- |
| `make run` | Build `Design/dist` and serve it with `tsx watch` |
| `make build` | Build `Design/dist` only |
| `make lint` | oxlint and stylelint |
| `make typecheck` | `tsc --noEmit` on `Design` |

## What it exposes

| Module | Source |
| --- | --- |
| `design/components` | `Design/src/components` |
| `design/core` | `Design/src/core`: the reset, tokens and `kicl-*` utilities. Import it once, before anything else. |
| `design/core/constants` | `Design/src/core/constants.ts` |
| `design/hooks` | `useTheme`, `useResponsive`, `useResizeObserver` |
| `design/icons` | `Company`, `Logo`, `Menu` and the `IconType` type |
| `design/router` | The `Router`, `MatchedRoute`, `useMatchPattern`, and the `react-router-dom` APIs the site uses |
| `design/status` | The HTTP status pages and the route `ErrorElement` |
| `design/widgets` | `GlobalHeader` and `SiteLogo` |

All the CSS goes out as one stylesheet (`bundleAllCSS`). It loads with whichever module the host imports first.

`react`, `react-dom`, `react-router-dom` and `react-hook-form` are shared singletons. Views import routing from `design/router`, never from `react-router-dom` directly. Inside this repo, `HyperLink` and the status pages import `react-router-dom` directly, because importing `router` from inside `components` would create an import cycle through `MatchedRoute`. The host has to share the same four. `HyperLink` and the status pages use the host's router context, and the form components use the form context a view creates with `useForm`.

## Decisions

- **Icon sets aren't re-exported.** Exposing `Ri` or `Fa` as a namespace ships every icon in the set, which made the components chunk 13.8 MB. Components import the icons they use from `react-icons`, and the host does the same.
- **Sass stays inside this repo.** The partials in `Design/src/**/_*.scss` are prepended to every stylesheet here, as they were in the host. The host never sees them. Its views use the runtime tokens: `--kicl-color-*`, the `kicl-*` utilities, and the `--kicl-viewport-*` flags for style queries.
- **Cascade layers match the host.** `Design/scripts/get-style-layer.ts` and Ki.CL's `App/.client/helper/get-style-layer.ts` must list the same layers in the same order. Both stylesheets end up on one page, and the first layer order the browser sees applies to both.

## Hosting

It's set up the same way as Ki.CL-back. The `Dockerfile` builds the remote into the image, and `Server/index.ts` serves it on Cloud Run under `/design`. The service only accepts internal traffic and only the host's service account may call it, so it has no CORS: browsers always load it through the host's same-origin `/design` proxy. `remoteEntry.js` is served `no-cache` and the hashed assets as immutable.
