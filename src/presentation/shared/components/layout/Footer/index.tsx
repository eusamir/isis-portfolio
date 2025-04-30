import { makePageGateway } from '@/infra/factories/makePageGateway'
import {
  GoogleLogo,
  InstagramLogo,
  MessengerLogo,
  TiktokLogo,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

export async function Footer() {
  const { heroSection } = makePageGateway()
  const result = await heroSection.getHeroSection()

  const links = [
    {
      url: result?.props.instagram || '',
      icon: <InstagramLogo size={22} color="#5A5F51" weight="bold" />,
    },
    {
      url: result?.props.tiktok || '',
      icon: <TiktokLogo size={22} color="#5A5F51" weight="bold" />,
    },
    {
      url: result?.props.email || '',
      icon: <GoogleLogo size={22} color="#5A5F51" weight="bold" />,
    },
    {
      url: result?.props.messenger || '',
      icon: <MessengerLogo size={22} color="#5A5F51" weight="bold" />,
    },
  ]
  return (
    <section className="bg-olive  w-full px-10 sm:px-8 md:px-30 py-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">Social Medias!</h1>
        <div className="flex gap-3 mb-10">
          {links.map(
            (social, idx) =>
              social.url && (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white p-2 rounded-full hover:scale-110 transition cursor-pointer">
                    {social.icon}
                  </div>
                </a>
              ),
          )}
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <p
          className="font-inter font-bold opacity-50 text-xs sm:text-sm text-center sm:text-left"
          style={{ fontFamily: 'Inter' }}
        >
          © 2025 Samir Andrade. Todos os direitos reservados.
        </p>
        <Link
          href={'https://samir-andrade.vercel.app/'}
          className="flex gap-1 items-center"
        >
          <p
            className="font-inter font-bold text-sm sm:text-md"
            style={{ fontFamily: 'Inter' }}
          >
            Developed by
          </p>
          <Image
            src={'/samLogo.svg'}
            width={50}
            height={50}
            className="sm:w-[70px] sm:h-[70px]"
            alt="Logo Samir"
          />
        </Link>
      </div>
    </section>
  )
}
