import { CreatePhotoDto } from '../dto/create-photo.dto';
import { Photo } from '../interfaces/photo.interface';

export function mapCreatePhotoDtoToPhoto(
  createPhotoDto: CreatePhotoDto,
): Photo {
  return {
    albumId: createPhotoDto.albumId,
    id: 0,
    title: createPhotoDto.title,
    url: createPhotoDto.url,
    thumbnailUrl: createPhotoDto.thumbnailUrl
  };
}
