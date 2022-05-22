import imageUrlBuilder from "@sanity/image-url";
import sanityClient from './client'

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}

export default urlFor