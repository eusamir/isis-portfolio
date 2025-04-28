import { makePageGateway } from '@/infra/factories/makePageGateway'
import { ImagesContainer } from './imagesContainer'

export async function Gallery() {
  const { imagesGallery } = makePageGateway()
  const result = await imagesGallery.getImagesGallery()

  return (
    <section className="px-4 sm:px-8 md:px-16 bg-olive py-10" id="gallery">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 max-w-7xl mx-auto">
        {result && (
          <>
            {result.props.url.map((src) => (
              <div key={src}>
                <ImagesContainer src={src} />
              </div>
            ))}
          </>
        )}
      </div>
    </section>
  )
}
