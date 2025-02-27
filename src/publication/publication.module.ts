import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { PublicationController } from './controllers/publication.controller';
import { PublicationService } from './services/publication.service';

@Module({
  imports: [HttpModule, ConfigModule.forRoot()],
  controllers: [PublicationController],
  providers: [PublicationService],
})
export class PublicationModule {}
