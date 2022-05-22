import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: process.env.SANITY_ID,
  apiVersion: '2021-03-25',
  dataset: 'production',
  useCdn: true,
})

export default client