import type { OnStageGallery } from "@/business/domain/OnStageGallery";

export interface OnStageGalleryGateway{
  getOnStageGallery():Promise<OnStageGallery | null>
}
