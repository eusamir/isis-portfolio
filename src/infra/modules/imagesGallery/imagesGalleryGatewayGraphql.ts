import type { GraphqlClient } from '@/infra/external/graphql/GraphqlClient'
import type { ImagesGalleryGateway } from './imagesGalleryGateway'
import { gql } from '@apollo/client'
import { ImagesGallery } from '@/business/domain/ImagesGallery'
import { ImagesGalleryGatewayMapper } from './mappers/ImagesGalleryMapper'

export class ImagesGalleryGatewayGraphql implements ImagesGalleryGateway {
  constructor(private readonly graphqlClient: GraphqlClient) {}

  async getImagesGallery(): Promise<ImagesGallery | null> {
    const result = await this.graphqlClient.query<{
      gallerySections: {
        isisGaleria: { url: string }[]
      }[]
    }>({
      query: gql`
        {
          gallerySections {
            isisGaleria{
              url
            }
          }
        }
      `
    })

    const data = result?.gallerySections[0]

    if (!data) return null

    return ImagesGalleryGatewayMapper.toImagesGallery({
      isisGaleria: data.isisGaleria
    })
  }
}
