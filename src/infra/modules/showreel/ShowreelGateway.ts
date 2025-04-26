import type { Showreel } from "@/business/domain/Showreel";

export interface ShowreelGateway{
  getShowreel():Promise<Showreel | null>
}
