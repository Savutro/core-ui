## Core UI

[![NPM Release](https://github.com/savutro/core-ui/actions/workflows/npm-release.yml/badge.svg)](https://github.com/savutro/core-ui/actions/workflows/npm-release.yml)
[![Package Version](https://img.shields.io/github/v/tag/savutro/core-ui?label=package%20version&sort=semver)](https://github.com/savutro/core-ui/tags)
[![GitHub Packages](https://img.shields.io/badge/GitHub%20Packages-@savutro%2Fcore--ui-2f6fed)](https://github.com/savutro/core-ui/pkgs/npm/core-ui)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://www.conventionalcommits.org/)
[![License: GPLv3](https://img.shields.io/badge/License-GPLv3-blue.svg)](LICENSE)

`@savutro/core-ui` is a standards-based web component library for sharing one design language across apps. It provides framework-agnostic custom elements, CSS custom property design tokens, and a package pipeline aimed at GitHub Packages.

The main workflow is:

```sh
npm install
npm run dev
npm run build
```

## Why This Exists

Apps drift when every project recreates buttons, cards, spacing, color, and focus states locally. Core UI keeps those decisions in one package so product code can consume stable components instead of restyling the same primitives again.

The library is intentionally boring at the integration boundary:

- components register as native custom elements
- design decisions flow through CSS tokens
- builds publish as an npm package
- releases are driven by semantic Git tags

## Installation

Install from GitHub Packages:

```sh
npm install @savutro/core-ui
```

Consumers need an `.npmrc` entry for the `@savutro` scope:

```sh
@savutro:registry=https://npm.pkg.github.com
```

Use the component bundle and tokens once in an app shell:

```ts
import '@savutro/core-ui';
import '@savutro/core-ui/tokens.css';
```

Then render standard custom elements:

```html
<cu-card>
  <h2 slot="heading">Project</h2>
  <p>Consistent spacing, color, typography, and interaction states.</p>
  <cu-button>Open</cu-button>
</cu-card>
```

## Components

### `cu-button`

Button primitive for consistent action styling.

```html
<cu-button>Primary action</cu-button>
<cu-button variant="secondary">Secondary</cu-button>
<cu-button variant="ghost">Ghost</cu-button>
```

Attributes:

- `variant`: `primary`, `secondary`, or `ghost`
- `disabled`: disables the inner button
- `type`: `button`, `submit`, or `reset`

### `cu-card`

Surface primitive for grouped content.

```html
<cu-card tone="accent">
  <h2 slot="heading">Token-driven surface</h2>
  <p>App themes can override the same design tokens.</p>
</cu-card>
```

Attributes:

- `tone`: `neutral` or `accent`

Slots:

- `heading`: optional card heading
- default slot: card content

## Theming

Override tokens in an app stylesheet:

```css
:root {
  --cu-color-accent: #2457a6;
  --cu-color-accent-strong: #173d78;
  --cu-radius-md: 6px;
}
```

## CI/CD

This repository uses the package release workflow in [.github/workflows/npm-release.yml](.github/workflows/npm-release.yml).

The flow:

- Pull requests: install and build only.
- Pushes to `main`: install and build only.
- Tags like `v1.2.3`: build, publish to GitHub Packages, and create a GitHub release.

The package is published to:

```text
https://npm.pkg.github.com/@savutro/core-ui
```

## Project Layout

```text
src/components/          Web components
src/styles/              Global design tokens
src/index.ts             Public package entry
scripts/copy-tokens.mjs  Build helper for package token export
.github/workflows/       CI/CD workflows
CHANGELOG.md             Release notes
VERSION                  Plain semantic package version
```

## Development

Run the local component demo:

```sh
npm run dev
```

Run checks:

```sh
npm run typecheck
npm run build
```

## Release

Keep `package.json`, `VERSION`, and `CHANGELOG.md` in sync, then tag a release:

```sh
git tag -a v0.1.0 -m "v0.1.0"
git push origin main --follow-tags
```

The tag triggers package publishing.

## Component Principles

- Components expose stable custom elements, slots, attributes, and events.
- Visual decisions should flow through tokens where practical.
- Components should work in any framework that can render standard HTML custom elements.
- Accessibility states such as keyboard focus and disabled behavior belong in the component by default.

## License

GPLv3. See [LICENSE](LICENSE).
