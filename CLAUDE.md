# CLAUDE.md

Ki.CL's design system, built as the Module Federation remote `design`. See README.md for commands, exposes and hosting.

## Layout

- `Design/` is the federated package (`@ki-cl/design`). Source lives in `Design/src`, the Vite config in `Design/vite.config.ts`, and the cascade layers in `Design/scripts/get-style-layer.ts`.
- `Server/` is the Express server that serves `Design/dist` at `/design`. It has no CORS: the service is internal-only and the host proxies it same-origin.
- Imports inside `Design/src` are relative. The generated types keep import paths as written, and in the host `@/` means `App/`, so an aliased import would resolve to the wrong module or to nothing.

## Rules

- The design-system rules in Ki.CL's CLAUDE.md apply here too: semantic markup, CSS over JS, no custom CSS a component or utility already covers, no extra wrappers, tokens over magic numbers, widths from the 12-column scale, and types inferred rather than restated.
- Each exposed module is a public API. If you rename or remove an export, the host has to change in the same release.
- Don't re-export a third-party namespace (`react-icons/ri` and the like). Everything in it ships to the host.
- A package that holds React context the host also uses (router, forms) has to be a `shared` singleton here and in the host.
- Keep `LAYERS` in `Design/scripts/get-style-layer.ts` the same as in Ki.CL's `App/.client/helper/get-style-layer.ts`.
- Single quotes, named exports only. Files and folders are lowercase with dashes.
- Git: same strategy as Ki.CL. Squash into `develop`, merge `develop` → `main`.
