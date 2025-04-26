/* eslint-disable react/no-unescaped-entities */
export function Details() {
  return (
    <div
      className="flex w-full justify-center items-center gap-10 h-24 top-24 fixed px-10 z-1 font-playfair text-lg text-[#5A5F51] backdrop-blur-xl"
      style={{ backgroundColor: 'rgba(177, 194, 194, 0.7)' }}
    >
      <h1>
        Height <strong className="font-bold">5'6"</strong>
      </h1>
      <h1>
        Atelier <strong>36</strong>
      </h1>
      <h1>
        Shoes <strong>3 1/2</strong>
      </h1>
      <h1>
        Hair <strong>Blond</strong>
      </h1>
      <h1>
        Eyes <strong>Deep Olive</strong>
      </h1>
    </div>
  )
}
