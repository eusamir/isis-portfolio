import { DownloadSimple } from '@phosphor-icons/react/dist/ssr'

export function Curriculo() {
  return (
    <section
      className="flex w-full px-4 sm:px-8 md:px-25 lg:px-25 py-3 sm:py-5 h-auto sm:h-120"
      id="curriculum-vitae"
    >
      <div className="flex sm:flex-row border-b-2 sm:border-b-3 md:border-b-5 border-[#5A5F51] w-full justify-between items-center py-5 sm:py-10 md:py-15">
        <h1 className="text-[#5A5F51] text-3xl sm:text-5xl md:text-7xl mb-4 sm:mb-0">
          Curriculum Vitae
        </h1>
        <div className="bg-olive p-2 sm:p-3 rounded-full hover:scale-110 transition cursor-pointer">
          <DownloadSimple
            size={20}
            className="sm:w-6 sm:h-6 md:w-7 md:h-7"
            color="#FFF"
            weight="bold"
          />
        </div>
      </div>
    </section>
  )
}
