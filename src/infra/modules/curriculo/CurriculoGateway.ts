import type { Curriculo } from "@/business/domain/Curriculo";

export interface CurriculoGateway{
  getCurriculo():Promise<Curriculo | null>
}
