import { GetPhotoDto } from '../dto/get-photo.dto';
import { Photo } from '../interfaces/photo.interface';

export function mapPhotoToGetPhotoDto(photo: Photo): GetPhotoDto {
  return {
    id: photo.id,
    albumId: photo.albumId,
    title: photo.title,
    url: photo.url,
    thumbnailUrl: photo.thumbnailUrl
  };
}
