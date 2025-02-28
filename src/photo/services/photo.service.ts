import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreatePhotoDto } from '../dto/create-photo.dto';
import { ConfigService } from '@nestjs/config';
import { mapCreatePhotoDtoToPhoto } from '../mapper/create-photo.mapper';
import { mapPhotoToGetPhotoDto } from '../mapper/get-photo.mapper';

@Injectable()
export class PhotoService {
  private readonly apiUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.apiUrl =
      this.configService.get<string>('API_KEY') ?? 'default_api_key';
  }

  async createPhoto(createPhotoDto: CreatePhotoDto) {
    const mappedPhoto = mapCreatePhotoDtoToPhoto(createPhotoDto);

    const response = await firstValueFrom(
      this.httpService.post(`${this.apiUrl}/photos`, mappedPhoto),
    );
    return mapPhotoToGetPhotoDto(response.data);
  }

  async getAllPhotos() {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/photos`),
    );
    return response.data.map((photo: any) => mapPhotoToGetPhotoDto(photo));
  }

  async getPhotoById(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/photos/${id}`),
    );
    return mapPhotoToGetPhotoDto(response.data);
  }

  async getPhotoByAlbumId(AlbumId: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/albums/${AlbumId}/photos`),
    );
    return response.data.map((photo: any) => mapPhotoToGetPhotoDto(photo));
  }
}
