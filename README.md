# MFP 300+ Promise Tracker
[![Update Laws Data](https://github.com/kaogeek/mfp-promise-tracker/actions/workflows/pull-data.yml/badge.svg?event=schedule)](https://github.com/kaogeek/mfp-promise-tracker/actions/workflows/pull-data.yml)

Move Forward Party promise tracker

## 🌎 Environment

- Production: coming soon
- Staging: https://mfp-promise-tracker-fls3ugj2l-kaogeek.vercel.app/

## 💻 Tech stack

- [NuxtJS](https://nuxtjs.org) with [Vue 2 and TypeScript](https://v2.vuejs.org/v2/guide/typescript.html#Basic-Usage)
- [TailwindCSS](https://tailwindcss.com)
- [Jest](https://jestjs.io) and [Vue Test Utils](https://v1.test-utils.vuejs.org/guides/#getting-started)
- ... as a database

## Quick setup
```bash
rm -rf node_modules                                                                                                                                                                              1 ✘ 
rm -f package-lock.json
npm cache clean --force
npm i
```

## 📐 Architecture

The project use static site generator (SSG) strategy. In the pipeline, API is called once before the build time, which mean no API will be called after the static site is generated. To update the site after the data is updated, site needed to be built and deployed again.

- JSON files then will be loaded by Nuxt from `yarn dev` and `yarn build` command

## 📂 Directory structure

Use `pascal-case` for every file name since Linux (eg. Github Action runner) is not case-incensitive, in contrary to Mac and Windows.

- `/components` Vue components
  - Put on the root if it's shared between pages
  - Put in the `/components/<page>/` if it's only used in that page
  - If components is too big or getting duplicated, you should split into several component which can also be group in sub-folder
- `/data` JSON promises and related data, including example one before fetching script is implemented.
- `/models` Data types (interface, enum, etc.) sharing across the project
- `/pages` Represent [Nuxt routing](https://nuxtjs.org/docs/directory-structure/pages)
- `/static` Static assets such as images
  - Before adding new assets, check first if it's already exist here.
  - `$config.path.base` can be used to reference `static` path (or base path)
  - `$config.path.images` can be used to reference `static/images` path
  ```vue
    <img :src="`${$config.path.images}/status/nodata.png`"
  ```
  - For SVG that can change the color (eg. button icon on hover), recommend in use inline svg with `currentColor` and Tailwind color preset
- `/tests` Test file
  - Recommend to mimick project structure eg. `/tests/components/component-name.test.ts`

## 💅 Styling and design system

- We used [WeVis Design System](https://wevisdemo.github.io/design-systems/) which provide
  - Utility classes for typography
  - Vue component
- For other styling customization beyond WeVis design system, use Tailwindcss
  - Color is defined in `tailwind.config.css` which naming should be related to Figma
  - Configuration is also available on http://localhost:3000/\_tailwind/ when dev server is running

## 🤝 Contributor

Core repo : WeVis Team

Design : K.Pond

Dev : K.Kawin, K.Ble, K.Hart

Content : K.Air, K.Meen

## 🤝 License

This repo has been modified from [WeVis Github](https://github.com/wevisdemo/promise-tracker) for public use.
