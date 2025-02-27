import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/post.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    PostModule,
    CommentModule
  ],
})
export class AppModule {}
