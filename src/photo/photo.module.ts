import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { PhotoController } from './controllers/photo.controller';
import { PhotoService } from './services/photo.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [PhotoController],
  providers: [PhotoService],
})
export class PhotoModule {}
