import type { GraphqlClient } from '@/infra/external/graphql/GraphqlClient'
import type { OnStageGalleryGateway } from './onStageGalleryGateway'
import { gql } from '@apollo/client'
import { OnStageGallery } from '@/business/domain/OnStageGallery'
import { OnStageGalleryGatewayMapper } from './mappers/onStageGalleryMapper'

export class OnStageGalleryGatewayGraphql implements OnStageGalleryGateway {
  constructor(private readonly graphqlClient: GraphqlClient) {}

  async getOnStageGallery(): Promise<OnStageGallery | null> {
    const result = await this.graphqlClient.query<{
      onStageGallerySections: {
        isisOnStageGaleria: { url: string }[]
      }[]
    }>({
      query: gql`
        {
          onStageGallerySections {
            isisOnStageGaleria{
              url
            }
          }
        }
      `
    })

    const data = result?.onStageGallerySections[0]

    console.log(data)

    if (!data) return null

    return OnStageGalleryGatewayMapper.toOnStageGallery({
      isisOnStageGaleria: data.isisOnStageGaleria
    })
  }
}
