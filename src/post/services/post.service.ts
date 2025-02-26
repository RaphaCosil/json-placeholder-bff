import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreatePostDto } from '../dto/create-post.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostService {
  constructor(
    private readonly httpService: HttpService, 
    private configService: ConfigService
  ) {}
  getApiKey(): string {
    return this.configService.get<string>('API_KEY') ?? 'default_api_key';
  }

  async createPost(createPostDto: CreatePostDto) {
    const response = await firstValueFrom(
      this.httpService.post(this.getApiKey + '/posts', createPostDto),
    );
    return response.data;
  }

  async getAllPosts() {
    const response = await firstValueFrom(
      this.httpService.get(this.getApiKey + '/posts'),
    );
    return response.data;
  }

  async getPost(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(this.getApiKey + `/posts/${id}`),
    );
    return response.data;
  }
  
  async getPostsByUser(userId: number) {
    const response = await firstValueFrom(
      this.httpService.get(this.getApiKey + `/users/${userId}/posts`),
    );
    return response.data;
  }
}
