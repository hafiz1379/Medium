import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    useCdn: process.env.NODE_ENV === "production",
    };

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const useCurrentUser = createCurrentUserHook(config);
