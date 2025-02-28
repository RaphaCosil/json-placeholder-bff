import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { PhotoService } from '../services/photo.service';
import { CreatePhotoDto } from '../dto/create-photo.dto';

@Controller('photo')
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Post()
  async createPhoto(@Body() createPhotoDto: CreatePhotoDto) {
    return this.photoService.createPhoto(createPhotoDto);
  }

  @Get()
  async getAllPhotos() {
    return this.photoService.getAllPhotos();
  }

  @Get(':id')
  async getPhoto(@Param('id') id: number) {
    return this.photoService.getPhotoById(id);
  }

  @Get('album/:albumId')
  async getPhotosByAlbumId(@Param('albumId') albumId: number) {
    return this.photoService.getPhotoByAlbumId(albumId);
  }
}
