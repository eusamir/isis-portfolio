import { makePageGateway } from '@/infra/factories/makePageGateway'

export default async function Home() {
  const { heroSection, imagesGallery, onStageGallery } = makePageGateway()

  const result = await heroSection.getHeroSection()
  const result2 = await imagesGallery.getImagesGallery()
  const result3 = await onStageGallery.getOnStageGallery()

  console.log(result2)
  console.log(result3)
  return (
    <main className="flex justify-center items-center min-h-screen">
      {result?.props.url ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={result.props.url} alt="" />
      ) : (
        <p>Imagem não disponível</p>
      )}
    </main>
  )
}
