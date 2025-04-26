import { HeroSection } from '@/business/domain/HeroSection'
import type { HeroSectionDTO } from '../dtos/DTO'

export class HeroSectionGatewayMapper {
  static toHeroSection(data: HeroSectionDTO): HeroSection {
    return new HeroSection({
      url: data.isisFotoPrincipal.url,
      email: data.email,
      instagram: data.instagram,
      messenger: data.messenger,
      tiktok: data.tiktok
    })
  }
}
