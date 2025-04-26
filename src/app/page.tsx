import { Curriculo } from '@/presentation/modules/CurriculoSection'
import { Gallery } from '@/presentation/modules/GallerySection'
import { HeroSection } from '@/presentation/modules/HeroSection'
import { Onstage } from '@/presentation/modules/OnStageSection'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Gallery />
      <Curriculo />
      <Onstage />
    </>
  )
}
