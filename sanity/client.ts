import {createClient} from 'next-sanity'

export const client = createClient({
  projectId: 'f9l3lluc',
  dataset: 'production',
  apiVersion: '2024-10-17',
  useCdn: false,
})
