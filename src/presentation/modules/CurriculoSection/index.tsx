import { DownloadSimple } from '@phosphor-icons/react/dist/ssr'

export function Curriculo() {
  return (
    <section
      className="flex w-full px-10 sm:px-8 md:px-25 py-5"
      id="curriculum-vitae"
    >
      <div className="flex border-b-5 border-[#5A5F51] w-full justify-between items-center py-15">
        <h1 className="text-[#5A5F51] text-7xl">Curriculum Vitae</h1>
        <div className="bg-olive p-3 rounded-full hover:scale-110 transition cursor-pointer">
          <DownloadSimple size={25} color="#FFF" weight="bold" />
        </div>
      </div>
    </section>
  )
}
