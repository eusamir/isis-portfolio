import type { GraphqlClient } from '@/infra/external/graphql/GraphqlClient'
import type { HeroSectionGateway } from './heroSectionGateway'
import { gql } from '@apollo/client'
import { HeroSection } from '@/business/domain/HeroSection'
import { HeroSectionGatewayMapper } from './mappers/HeroSectionMapper'

export class HeroSectionGatewayGraphql implements HeroSectionGateway {
  constructor(private readonly graphqlClient: GraphqlClient) {}

  async getHeroSection(): Promise<HeroSection | null> {
    const result = await this.graphqlClient.query<{
      isisFotosSchemas: {
        instagram: string
        tiktok: string
        messenger: string
        email: string
        isisFotoPrincipal: { url: string }
      }[]
    }>({
      query: gql`
        {
          isisFotosSchemas {
            instagram
            tiktok
            messenger
            email
            isisFotoPrincipal {
              url
            }
          }
        }
      `
    })

    const resultSocials = result?.isisFotosSchemas[0]

    if (!resultSocials) return null

    return HeroSectionGatewayMapper.toHeroSection({
      messenger: resultSocials?.messenger,
      email: resultSocials?.email,
      instagram: resultSocials?.instagram,
      tiktok: resultSocials?.tiktok,
      isisFotoPrincipal: { url: resultSocials?.isisFotoPrincipal.url }
    })
  }
}
