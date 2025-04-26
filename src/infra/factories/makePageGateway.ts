import { ApolloAdapter } from '../external/graphql/ApolloAdapter'
import { CurriculoGatewayGraphql } from '../modules/curriculo/CurriculoGatewayGraphql'
import { HeroSectionGatewayGraphql } from '../modules/heroSection/heroSectionGatewayGraphql'
import { ImagesGalleryGatewayGraphql } from '../modules/imagesGallery/imagesGalleryGatewayGraphql'
import { OnStageGalleryGatewayGraphql } from '../modules/onStageGallery/onStageGalleryGatewayGraphql'
import { ShowreelGatewayGraphql } from '../modules/showreel/ShowreelGatewayGraphql'

export function makePageGateway() {
  const apolloClient = new ApolloAdapter()

  const heroSection = new HeroSectionGatewayGraphql(apolloClient)
  const imagesGallery = new ImagesGalleryGatewayGraphql(apolloClient)
  const onStageGallery = new OnStageGalleryGatewayGraphql(apolloClient)
  const showreel = new ShowreelGatewayGraphql(apolloClient)
  const curriculo = new CurriculoGatewayGraphql(apolloClient)

  return { heroSection, imagesGallery, onStageGallery, showreel, curriculo }
}
