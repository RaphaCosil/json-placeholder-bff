import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PublicationService } from '../services/publication.service';
import { CreatePublicationDto } from '../dto/create-publication.dto';

@Controller('publication')
export class PublicationController {
  constructor(private readonly publicationService: PublicationService) {}

  @Post()
  async createPost(@Body() createPostDto: CreatePublicationDto) {
    return this.publicationService.createPublication(createPostDto);
  }

  @Get()
  async getAllPosts() {
    return this.publicationService.getAllPublication();
  }

  @Get(':id')
  async getPost(@Param('id') id: number) {
    return this.publicationService.getPublication(id);
  }

  @Get('user/:userId')
  async getPostsByUser(@Param('userId') userId: number) {
    return this.publicationService.getPublicationByUser(userId);
  }
}
