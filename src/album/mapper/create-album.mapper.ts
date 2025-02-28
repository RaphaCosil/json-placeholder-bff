import { CreateAlbumDto } from '../dto/create-album.dto';
import { Album } from '../interfaces/album.interface';

export function mapCreateAlbumDtoToAlbum(
  createAlbumDto: CreateAlbumDto,
): Album {
  return {
    userId: createAlbumDto.userId,
    id: 0,
    title: createAlbumDto.title,
  };
}
