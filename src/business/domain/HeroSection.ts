export interface HeroSectionProps{
  url: string
  instagram: string
  messenger: string
  tiktok: string
  email: string
}

export class HeroSection{
  constructor(public readonly props: HeroSectionProps){}
}