import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { PostModule } from './post/post.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    PostModule
  ],
})
export class AppModule {}
