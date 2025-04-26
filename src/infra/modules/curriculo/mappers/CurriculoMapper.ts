import { Curriculo } from '@/business/domain/Curriculo'
import type { CurriculoDTO } from '../dtos/DTO'

export class CurriculoGatewayMapper {
  static toCurriculo(data: CurriculoDTO) {
    return new Curriculo({
      url: data.isisCurriculo.url,
    })
  }
}
