import type { GraphqlClient } from '@/infra/external/graphql/GraphqlClient'
import type { ShowreelGateway } from './ShowreelGateway'
import { gql } from '@apollo/client'
import { Showreel } from '@/business/domain/Showreel'
import { ShowreelGatewayMapper } from './mappers/ShowreelMapper'

export class ShowreelGatewayGraphql implements ShowreelGateway {
  constructor(private readonly graphqlClient: GraphqlClient) {}

  async getShowreel(): Promise<Showreel | null> {
    const result = await this.graphqlClient.query<{
      showreelSections: {
        title: string,
        description: string,
        showreel: { url: string }
      }[]
    }>({
      query: gql`
        {
          showreelSections {
            title
            description
            showreel{
              url
            }
          }
        }
      `
    })

    const data = result?.showreelSections[0]

    if (!data) return null

    return ShowreelGatewayMapper.toShowreel({
      description: data.description,
      showreel: {url: data.showreel.url},
      title: data.title
    })
  }
}
