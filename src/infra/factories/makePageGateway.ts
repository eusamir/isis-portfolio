import { ApolloAdapter } from '../external/graphql/ApolloAdapter'
import { HeroSectionGatewayGraphql } from '../modules/heroSection/heroSectionGatewayGraphql'
import { ImagesGalleryGatewayGraphql } from '../modules/imagesGallery/imagesGalleryGatewayGraphql'
import { OnStageGalleryGatewayGraphql } from '../modules/onStageGallery/onStageGalleryGatewayGraphql'

export function makePageGateway() {
  const apolloClient = new ApolloAdapter()

  const heroSection = new HeroSectionGatewayGraphql(apolloClient)
  const imagesGallery = new ImagesGalleryGatewayGraphql(apolloClient)
  const onStageGallery = new OnStageGalleryGatewayGraphql(apolloClient)

  return { heroSection, imagesGallery, onStageGallery }
}
