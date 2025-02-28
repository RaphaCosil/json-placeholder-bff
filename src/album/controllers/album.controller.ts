import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AlbumService } from '../services/album.service';
import { CreateAlbumDto } from '../dto/create-album.dto';

@Controller('albums')
export class AlbumController {
  constructor(private readonly albumService: AlbumService) {}

  @Post()
  async createAlbum(@Body() createAlbumDto: CreateAlbumDto) {
    return this.albumService.createAlbum(createAlbumDto);
  }

  @Get()
  async getAllAlbums() {
    return this.albumService.getAllAlbums();
  }

  @Get(':id')
  async getAlbum(@Param('id') id: number) {
    return this.albumService.getAlbumById(id);
  }

  @Get('user/:userId')
  async getAlbumsByUserId(@Param('userId') userId: number) {
    return this.albumService.getAlbumsByUserId(userId);
  }
}
