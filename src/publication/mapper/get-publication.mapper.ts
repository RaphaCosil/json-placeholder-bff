import { GetPublicationDto } from '../dto/get-publication.dto';
import { Posts } from '../interfaces/post.interface';

export function mapPostToGetPublicationDto(post: Posts): GetPublicationDto {
  return {
    id: post.id,
    userId: post.userId,
    title: post.title,
    body: post.body,
  };
}
