import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { CreatePostDto } from '../dto/create-post.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostService {
  private readonly apiUrl: string;

  constructor(
    private readonly httpService: HttpService, 
    private configService: ConfigService
  ) {
    this.apiUrl = this.configService.get<string>('API_KEY') ?? 'default_api_key';
  }

  async createPost(createPostDto: CreatePostDto) {
    const response = await firstValueFrom(
      this.httpService.post(`${this.apiUrl}/posts`, createPostDto),
    );
    return response.data;
  }

  async getAllPosts() {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/posts`),
    );
    return response.data;
  }

  async getPost(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/posts/${id}`),
    );
    return response.data;
  }
  
  async getPostsByUser(userId: number) {
    const response = await firstValueFrom(
      this.httpService.get(`${this.apiUrl}/users/${userId}/posts`),
    );
    return response.data;
  }
}
