import type { ImagesGallery } from "@/business/domain/ImagesGallery";

export interface ImagesGalleryGateway{
  getImagesGallery():Promise<ImagesGallery | null>
}
