import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { CommentController } from './controllers/comment.controller';
import { CommentService } from './services/comment.service';

@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot(),
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
