import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { PostController } from './controllers/post.controller';
import { PostService } from './services/post.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
