import { OnStageGallery } from '@/business/domain/OnStageGallery'
import type { OnStageGalleryDTO } from '../dtos/DTO'

export class OnStageGalleryGatewayMapper {
  static toOnStageGallery(data: OnStageGalleryDTO): OnStageGallery {
    return new OnStageGallery({
      url: data.isisOnStageGaleria.map(item => item.url),
    })
  }
}
