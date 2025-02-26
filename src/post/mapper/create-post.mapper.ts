import { CreatePostDto } from '../dto/create-post.dto';
import { Posts } from '../interfaces/post.interface';

export function mapPostsToCreatePostDto(post: Posts): CreatePostDto {
  return {
    userId: post.userId,
    title: post.title,
    body: post.body,
  };
}

export function mapPostsToGetPostsDto(posts: Posts[]): CreatePostDto[] {
  return posts.map((post) => mapPostsToCreatePostDto(post));
}
