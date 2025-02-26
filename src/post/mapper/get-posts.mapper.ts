import { GetPostDto } from '../dto/get-post.dto';
import { Posts } from '../interfaces/post.interface';

export function mapPostToGetPostDto(post: Posts): GetPostDto {
  return {
    id: post.id,
    userId: post.userId,
    title: post.title,
    body: post.body,
  };
}

export function mapPostsToGetPostsDto(posts: Posts[]): GetPostDto[] {
  return posts.map((post) => mapPostToGetPostDto(post));
}
