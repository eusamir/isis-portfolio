import Image from 'next/image'

export function Gallery() {
  const images = Array(6).fill('/principal.png')
  return (
    <div className="px-4 sm:px-8 md:px-16 bg-olive py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="rounded-2xl overflow-hidden">
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              width={600}
              height={280}
              className="rounded-2xl object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
