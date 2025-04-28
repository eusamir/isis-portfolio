import { makePageGateway } from '@/infra/factories/makePageGateway'
import { ImagesContainer } from './imagesContainer'

export async function Onstage() {
  const { onStageGallery, showreel } = makePageGateway()
  const result = await onStageGallery.getOnStageGallery()
  const showreelData = await showreel.getShowreel()
  return (
    <section
      className="flex flex-col items-center px-4 mt-5 sm:mt-10 sm:px-8 md:px-16 py-5 sm:py-10"
      id="on-stage"
    >
      <h1 className="text-[#5A5F51] text-3xl sm:text-5xl md:text-7xl px-2 sm:px-10 self-start">
        On stage
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-6 max-w-7xl mx-auto py-5 sm:py-10 w-full">
        {result && (
          <>
            {result.props.url.map((src, index) => (
              <div key={index}>
                <ImagesContainer src={src} />
              </div>
            ))}
          </>
        )}
      </div>
      <div className="flex flex-col w-full items-center gap-3 sm:gap-5 mx-auto md:w-[95%]">
        {showreelData && (
          <>
            <div className="rounded-2xl w-full overflow-hidden">
              <video
                src={showreelData.props.url}
                autoPlay={true}
                muted
                loop={true}
                controls
                className="w-full h-auto sm:h-[400px] md:h-[500px] lg:h-[720px] rounded-2xl object-cover"
              />
            </div>
            <div className="w-full px-2">
              <h1 className="text-[#5A5F51] text-3xl sm:text-4xl md:text-6xl mb-2 sm:mb-4">
                {showreelData.props.title}
              </h1>
              <p className="text-[#5A5F51] text-lg sm:text-xl md:text-2xl">
                {showreelData.props.description}
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  )
}
