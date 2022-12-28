# etude-next-amplify <!-- omit in toc -->

[![Last Commit](https://img.shields.io/github/last-commit/yktt-nuane/etude-next-amplify)](https://github.com/yktt-nuane/etude-next-amplify/graphs/commit-activity)
[![CI](https://github.com/yktt-nuane/etude-next-amplify/actions/workflows/ci.yml/badge.svg)](https://github.com/yktt-nuane/etude-next-amplify/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Setup](#setup)
    - [install](#install)
    - [Reveal secrets](#reveal-secrets)
    - [Hide secrets](#hide-secrets)
    - [Environment Variables](#environment-variables)
      - [`.env.local`](#envlocal)
  - [Develop](#develop)
  - [Test](#test)
  - [Deploy](#deploy)
- [Misc](#misc)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- Node.js (version 18.11.11 or higher)
  - Next.js (version 13.0.6 or higher)
  - ESLint
  - Prettier
  - Stylelint
  - Vitest
  - Tailwind CSS
  - Mantine

## How to

### Setup

#### install

`npm install` to install packages

#### Reveal secrets

`npm run reveal` to reveal secret files.

#### Hide secrets

`npm run hide` to hide secret files.

#### Environment Variables

##### `.env.local`

```.env.local
SECRET_KEY=xxxxxxxx
```

### Develop

`npm run dev` to start development server.

### Test

`npm run test:unit` to test using Vitest and check coverage.

### Deploy

Every time you push to GitHub, it is automatically deployed to Vercel.

## Misc

### LICENSE

This project is licensed under the MIT License, see the [LICENSE](./LICENSE) for details.

### Contributors

- [Tatsuro Yokoyama](https://github.com/yktt-nuane)
