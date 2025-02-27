import { GetCommentDto } from '../dto/get-comment.dto';
import { Comment } from '../interfaces/comment.interface';

export function mapCommentToGetCommentDto(comment: Comment): GetCommentDto {
  return {
    postId: comment.postId,
    id: comment.id,
    name: comment.name,
    email: comment.email,
    body: comment.body,
  };
}
