import { CreatePublicationDto } from '../dto/create-publication.dto';
import { Posts } from '../interfaces/post.interface';

export function mapCreatePublicationDtoToPost(
  createPostDto: CreatePublicationDto,
): Posts {
  return {
    userId: createPostDto.userId,
    id: 0,
    title: createPostDto.title,
    body: createPostDto.body,
  };
}
