import { Burguer } from '../Burguer'
import { Navigation } from '../Navigation'

export function Header() {
  return (
    <div className="flex w-full justify-between items-center bg-olive h-24 fixed px-10 z-1">
      <h1 className="text-[40px] font-cormorant ml-10">Isis Andrade</h1>
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Navigation />
      </div>
      <Burguer />
    </div>
  )
}
