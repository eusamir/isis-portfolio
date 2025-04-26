import { Gallery } from '@/presentation/modules/GallerySection'
import { HeroSection } from '@/presentation/modules/HeroSection'

export default async function Home() {
  return (
    <>
      <HeroSection />
      <Gallery />
    </>
  )
}
