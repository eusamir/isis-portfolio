import {
  GoogleLogo,
  InstagramLogo,
  MessengerLogo,
  TiktokLogo,
} from '@phosphor-icons/react/dist/ssr'
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
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 md:px-8 relative py-8 md:py-0 mt-10 md:mt-0">
        <div className="flex flex-col gap-2">
          <p className="text-xl sm:text-2xl font-playfair text-[#5A5F51]">
            Actress
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bebas text-[#5A5F51] border-b-2 md:border-b-3 border-[#5A5F51] pb-3 md:pb-5">
            Isis Andrade
          </h1>
          <div className="flex gap-3 mt-5">
            {[InstagramLogo, TiktokLogo, GoogleLogo, MessengerLogo].map(
              (Icon, idx) => (
                <div
                  key={idx}
                  className="bg-olive p-2 rounded-full hover:scale-110 transition cursor-pointer"
                >
                  <Icon size={25} color="#FFF" weight="bold" />
                </div>
              ),
            )}
          </div>
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
