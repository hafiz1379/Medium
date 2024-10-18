import {createClient} from 'next-sanity'
import {SanityImageSource} from '@sanity/image-url/lib/types/types'
import imageBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'f9l3lluc',
  dataset: 'production',
  apiVersion: '2024-10-17',
  useCdn: false,
})

const {projectId, dataset} = client.config()

export const urlFor = (source: SanityImageSource) =>
  projectId && dataset ? imageBuilder({dataset, projectId}).image(source) : null
