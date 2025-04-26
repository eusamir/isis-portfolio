import { Showreel } from '@/business/domain/Showreel'
import type { ShowreelDTO } from '../dtos/DTO'

export class ShowreelGatewayMapper {
  static toShowreel(data: ShowreelDTO) {
    return new Showreel({
      url: data.showreel.url,
      title: data.title,
      description: data.description
    })
  }
}
