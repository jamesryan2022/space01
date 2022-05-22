## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## If this is an app that connects to Sanity...

If you have no Sanity project set up already, navigate to `/studio`, hit `sanity login` and then `sanity init`.

We store the Sanity ID in an environment variable. Create a `.env.local` file in the root of your `/web` directory and assign the Sanity ID the value `SANITY_ID`. You should do the same in `.env.local` with the dataset, giving this the value `SANITY_DATASET`. There is an .env.example file included that you can adapt

## Creating components & pages using Hygen

In the root of the web directory, run `yarn new component` or `yarn new page` to begin generating component or page files. First, pick a name, then, if it's a component, select it's `type`. If a component, this will create a new `[componentName].tsx` with preloaded interface and Base styled component. If a page, a new page file is created.

## Pre-generating data from Sanity

The file `/web/scripts/generate-metadata.js` is for pre-generating metadata from Sanity at build-time. Adapt it for anything you'd like to with Sanity data at buildtime.

To utilise this, add this to scripts in package.json:

```
"dev": "yarn build:generate-metadata && next dev",
"build:generate-metadata": "node ./scripts/generate-metadata.js",
"build": "yarn build:generate-metadata && next build"
```
