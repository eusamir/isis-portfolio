import type { HeroSection } from "@/business/domain/HeroSection";

export interface HeroSectionGateway{
  getHeroSection():Promise<HeroSection | null>
}
