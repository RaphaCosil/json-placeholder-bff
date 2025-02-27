import { CreateCommentDto } from '../dto/create-comment.dto';
import { Comment } from '../interfaces/comment.interface';

export function mapCreateCommentDtoToComment(createCommentDto: CreateCommentDto): Comment {
  return {
    postId: createCommentDto.postId,
    id: 0,
    name: createCommentDto.name,
    email: createCommentDto.email,
    body: createCommentDto.body,
  };
}
