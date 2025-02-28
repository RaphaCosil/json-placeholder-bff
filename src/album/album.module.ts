import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { AlbumController } from './controllers/album.controller';
import { AlbumService } from './services/album.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [AlbumController],
  providers: [AlbumService],
})
export class AlbumModule {}
