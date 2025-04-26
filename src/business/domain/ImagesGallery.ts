export interface ImagesGalleryProps{
  url: string[]
}

export class ImagesGallery{
  constructor(public readonly props: ImagesGalleryProps){}
}