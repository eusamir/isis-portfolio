import Image from 'next/image'

export function Onstage() {
  const images = Array(4).fill('/principal.png')
  return (
    <section
      className="flex flex-col items-center px-4 mt-5 sm:mt-10 sm:px-8 md:px-16 py-5 sm:py-10"
      id="on-stage"
    >
      <h1 className="text-[#5A5F51] text-3xl sm:text-5xl md:text-7xl px-2 sm:px-10 self-start">
        On stage
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6 max-w-7xl mx-auto py-5 sm:py-10 w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-md md:rounded-2xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`Imagem ${index + 1}`}
              width={600}
              height={280}
              className="rounded-md md:rounded-2xl object-cover w-full"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center gap-3 sm:gap-5 w-full max-w-[76rem] mx-auto">
        <div className="rounded-2xl w-full overflow-hidden">
          <video
            src="/video.mp4"
            controls
            className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[720px] rounded-2xl object-cover"
          />
        </div>
        <div className="w-full px-2">
          <h1 className="text-[#5A5F51] text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-4">
            Title
          </h1>
          <p className="text-[#5A5F51] text-lg sm:text-xl md:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto aut
            eveniet commodi nesciunt sunt animi soluta incidunt corporis modi
            inventore dicta, quo ratione. Ullam nam similique cumque,
            consequatur voluptatibus dolorum!
          </p>
        </div>
      </div>
    </section>
  )
}
