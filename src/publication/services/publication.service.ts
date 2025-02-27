import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreatePublicationDto } from '../dto/create-publication.dto';
import { mapCreatePublicationDtoToPost } from '../mapper/create-publication.mapper';
import { mapPostToGetPublicationDto } from '../mapper/get-publication.mapper';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PublicationService {
  private readonly apiUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {
    this.apiUrl =
      this.configService.get<string>('API_KEY') ?? 'default_api_key';
  }

  async createPublication(createPostDto: CreatePublicationDto) {
    const mappedPublication = mapCreatePublicationDtoToPost(createPostDto);
    const response = await firstValueFrom(
      this.httpService.post(`${this.apiUrl}/posts`, mappedPublication),
    );
    return mapPostToGetPublicationDto(response.data);
  }

  async getAllPublication() {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/posts`),
    );
    return mapPostToGetPublicationDto(response.data);
  }

  async getPublication(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/posts/${id}`),
    );
    return mapPostToGetPublicationDto(response.data);
  }

  async getPublicationByUser(userId: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/users/${userId}/posts`),
    );
    return mapPostToGetPublicationDto(response.data);
  }
}
