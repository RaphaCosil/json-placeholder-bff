import { GetAlbumDto } from '../dto/get-album.dto';
import { Album } from '../interfaces/album.interface';

export function mapAlbumToGetAlbumDto(album: Album): GetAlbumDto {
  return {
    userId: album.userId,
    id: album.id,
    title: album.title,
  };
}
