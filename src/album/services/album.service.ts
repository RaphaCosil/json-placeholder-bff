import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { CreateAlbumDto } from '../dto/create-album.dto';
import { ConfigService } from '@nestjs/config';
import { mapCreateAlbumDtoToAlbum } from '../mapper/create-album.mapper';
import { mapAlbumToGetAlbumDto } from '../mapper/get-album.mapper';

@Injectable()
export class AlbumService {
  private readonly apiUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.apiUrl =
      this.configService.get<string>('API_KEY') ?? 'default_api_key';
  }

  async createAlbum(createAlbumDto: CreateAlbumDto) {
    const mappedAlbum = mapCreateAlbumDtoToAlbum(createAlbumDto);

    const response = await firstValueFrom(
      this.httpService.post(`${this.apiUrl}/albums`, mappedAlbum),
    );
    return mapAlbumToGetAlbumDto(response.data);
  }

  async getAllAlbums() {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/albums`),
    );
    return response.data.map((album: any) =>
      mapAlbumToGetAlbumDto(album),
    );
  }

  async getAlbumById(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/albums/${id}`),
    );
    return mapAlbumToGetAlbumDto(response.data);
  }

  async getAlbumsByUserId(userId: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/users/${userId}/albums`),
    );
    return response.data.map((album: any) =>
      mapAlbumToGetAlbumDto(album),
    );
  }
}
