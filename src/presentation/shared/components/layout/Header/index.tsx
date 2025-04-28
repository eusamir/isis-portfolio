import { makePageGateway } from '@/infra/factories/makePageGateway'
import { Burguer } from '../Burguer'
import { Navigation } from '../Navigation'

export async function Header() {
  const { heroSection } = makePageGateway()
  const result = await heroSection.getHeroSection()

  const socialLinks = [
    { url: result?.props.instagram || '', name: 'instagram' },
    { url: result?.props.tiktok || '', name: 'tiktok' },
    { url: result?.props.email || '', name: 'email' },
    { url: result?.props.messenger || '', name: 'messenger' },
  ]
  return (
    <div className="flex w-full justify-between items-center bg-olive h-24 fixed -px-2 md:px-10 z-1">
      <h1 className="md:text-[40px] text-[30px] font-cormorant ml-10">
        Isis Andrade
      </h1>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Navigation />
      </div>
      <Burguer socialLinks={socialLinks} />
    </div>
  )
}
