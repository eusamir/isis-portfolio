import {
  GoogleLogo,
  InstagramLogo,
  MessengerLogo,
  TiktokLogo,
} from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <section className="bg-olive  w-full px-10 sm:px-8 md:px-30 py-5">
      <div className="flex flex-col gap-5">
        <h1 className="text-2xl">Social Medias!</h1>
        <div className="flex gap-3 mb-10">
          {[InstagramLogo, TiktokLogo, GoogleLogo, MessengerLogo].map(
            (Icon, idx) => (
              <div
                key={idx}
                className="bg-white p-1 rounded-full hover:scale-110 transition cursor-pointer"
              >
                <Icon size={22} color="#5A5F51" weight="bold" />
              </div>
            ),
          )}
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-inter font-bold opacity-50 text-sm">
          © 2025 Samir Andrade. Todos os direitos reservados.
        </p>
        <Link href={'https://samir-andrade.vercel.app/'} className="flex gap-1">
          <p className="font-inter font-bold text-md">Developed by</p>
          <Image src={'/samLogo.svg'} width={70} height={70} alt="" />
        </Link>
      </div>
    </section>
  )
}
