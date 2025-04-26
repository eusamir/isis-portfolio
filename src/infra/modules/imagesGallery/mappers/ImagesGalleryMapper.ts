import { ImagesGallery } from '@/business/domain/ImagesGallery'
import type { ImagesGalleryDTO } from '../dtos/DTO'

export class ImagesGalleryGatewayMapper {
  static toImagesGallery(data: ImagesGalleryDTO): ImagesGallery {
    return new ImagesGallery({
      url: data.isisGaleria.map(item => item.url),
    })
  }
}
