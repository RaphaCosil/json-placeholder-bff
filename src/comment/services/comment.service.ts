import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom, map } from 'rxjs';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { ConfigService } from '@nestjs/config';
import { mapCreateCommentDtoToComment } from '../mapper/create-comment.mapper';
import { mapCommentToGetCommentDto } from '../mapper/get-comment.mapper';

@Injectable()
export class CommentService {
  private readonly apiUrl: string;

  constructor(
    private readonly httpService: HttpService, 
    private configService: ConfigService
  ) {
    this.apiUrl = this.configService.get<string>('API_KEY') ?? 'default_api_key';
  }

  async createComment(createCommentDto: CreateCommentDto) {
    const mappedComment = mapCreateCommentDtoToComment(createCommentDto);

    const response = await firstValueFrom(
      this.httpService.post(
        `${this.apiUrl}/comments`, mappedComment
        ),
    );
    return mapCommentToGetCommentDto(response.data);
  }

  async getAllComments() {
    const response = await firstValueFrom(
      this.httpService.get(
        `${this.apiUrl}/comments`
        ),
    );
    return response.data.map((comment: any) => mapCommentToGetCommentDto(comment));
  }

  async getCommentById(id: number) {
    const response = await firstValueFrom(
      this.httpService.get(
        `${this.apiUrl}/comments/${id}`
        ),
    );
    return mapCommentToGetCommentDto(response.data);
  }
  
  async getCommentsByPostId(postId: number) {
    const response = await firstValueFrom(
      this.httpService.get(
        `${this.apiUrl}/posts/${postId}/comments`
        ),
    );
    return response.data.map((comment: any) => mapCommentToGetCommentDto(comment));
  }
}
