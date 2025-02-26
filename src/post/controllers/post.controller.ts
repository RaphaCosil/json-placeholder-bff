import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PostService } from '../services/post.service';
import { CreatePostDto } from '../dto/create-post.dto';


@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePostDto) {
    return this.postService.createPost(createPostDto);
  }

  @Get()
  async getAllPosts() {
    return this.postService.getAllPosts();
  }

  @Get(':id')
  async getPost(@Param('id') id: number) {
    return this.postService.getPost(id);
  }

  @Get('user/:userId')
  async getPostsByUser(@Param('userId') userId: number) {
    return this.postService.getPostsByUser(userId);
  }
}
