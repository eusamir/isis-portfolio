import type { GraphqlClient } from '@/infra/external/graphql/GraphqlClient'
import type { CurriculoGateway } from './CurriculoGateway'
import { gql } from '@apollo/client'
import { Curriculo } from '@/business/domain/Curriculo'
import { CurriculoGatewayMapper } from './mappers/CurriculoMapper'

export class CurriculoGatewayGraphql implements CurriculoGateway {
  constructor(private readonly graphqlClient: GraphqlClient) {}

  async getCurriculo(): Promise<Curriculo | null> {
    const result = await this.graphqlClient.query<{
      curriculoSections: {
        isisCurriculo: { url: string }
      }[]
    }>({
      query: gql`
        {
          curriculoSections {
            isisCurriculo{
              url
            }
          }
        }
      `
    })

    const data = result?.curriculoSections[0]

    if (!data) return null

    return CurriculoGatewayMapper.toCurriculo({
      isisCurriculo: {url: data.isisCurriculo.url},
    })
  }
}
