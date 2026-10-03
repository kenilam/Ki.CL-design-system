# Design system image for Cloud Run, built the same way as Ki.CL-back's.
#
# The remote is built here rather than at boot, so a cold start never waits on
# a build that could fail after the service reports healthy.

FROM node:24-slim

WORKDIR /src

RUN corepack enable

# Manifests first, so a dependency install is only redone when they change.
COPY package.json yarn.lock .yarnrc.yml ./
COPY Design/package.json ./Design/
COPY Server/package.json ./Server/

# Dev dependencies are needed: the build uses Vite and the server runs on tsx.
RUN yarn install --immutable

COPY . .

RUN yarn build

ENV NODE_ENV=production

# Cloud Run supplies PORT; this is the fallback.
EXPOSE 8080

CMD ["yarn", "tsx", "Server/index.ts"]
