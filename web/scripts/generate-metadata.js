/* eslint-disable @typescript-eslint/no-var-requires */
const fsp = require('fs/promises')
const sanityClient = require('@sanity/client')

// This file is for pre-generating metadata from Sanity at build-time. 
// Adapt it for anything you'd like to with Sanity data at buildtime
// To utilise this, add this to scripts in package.json:

// "dev": "yarn build:generate-metadata && next dev",
// "build:generate-metadata": "node ./scripts/generate-metadata.js",
// "build": "yarn build:generate-metadata && next build",

const client = sanityClient({
  projectId: process.env.SANITY_ID,
  apiVersion: '2021-03-25',
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
})

async function generateMetadata() {
  // This is where to query for metadata
  const metadata = await client.fetch(
    `*[_type== 'settings'] {
      "title": metaTitle,
      "description": metaDescription,
      "image": metaImage.asset->url,
      "url": metaUrl,
    }`
  )

  await fsp.writeFile(
    'metadata.json',
    JSON.stringify(metadata, null, 2)
  )

  console.log('✨ Wrote metadata')
}

generateMetadata()
