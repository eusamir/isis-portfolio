import Image from 'next/image'

export function Gallery() {
  const images = Array(6).fill('/principal.png')
  return (
    <section className="px-4 sm:px-8 md:px-16 bg-olive py-10" id="gallery">
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2 md:gap-4 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-sm md:rounded-2xl"
          >
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              width={600}
              height={280}
              className="object-cover w-full rounded-sm md:rounded-2xl"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
