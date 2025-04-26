import Image from 'next/image'

export function Onstage() {
  const images = Array(4).fill('/principal.png')
  return (
    <section
      className="flex flex-col items-center px-4 mt-10 sm:px-8 md:px-16 py-10"
      id="on-stage"
    >
      <h1 className="text-[#5A5F51] text-7xl px-10 self-start">On stage</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto py-10">
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
      <div className="flex flex-col items-center gap-5 w-full max-w-[76rem] mx-auto">
        <div className="rounded-2xl w-full overflow-hidden">
          <video
            src="/video.mp4"
            controls
            className="w-full h-[720px] rounded-2xl object-cover"
          />
        </div>
        <div className="w-full px-2">
          <h1 className="text-[#5A5F51] text-6xl mb-4">Title</h1>
          <p className="text-[#5A5F51] text-2xl">
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
