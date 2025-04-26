import Image from 'next/image'

export function HeroSection() {
  return (
    <section
      className="flex-1 flex justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/backgroundHero.svg')",
      }}
      id="portfolio"
    >
      <div className="flex items-center justify-between w-full max-w-7xl px-8 relative">
        <div className="flex flex-col gap-2">
          <p className="text-2xl font-playfair text-[#5A5F51]">Actress</p>
          <h1 className="text-7xl font-bebas text-[#5A5F51]">Isis Andrade</h1>
        </div>
        <div className="relative pb-8">
          <Image
            src="/principal.png"
            alt="Principal"
            width={600}
            height={300}
            className="rounded-2xl mt-[30%]"
          />
        </div>
      </div>
    </section>
  )
}
