import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PublicationModule } from './publication/publication.module';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    PublicationModule,
    CommentModule
  ],
})
export class AppModule {}
