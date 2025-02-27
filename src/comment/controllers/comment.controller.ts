import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CommentService } from '../services/comment.service';
import { CreateCommentDto } from '../dto/create-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(@Body() createCommentDto: CreateCommentDto) {
    return this.commentService.createComment(createCommentDto);
  }

  @Get()
  async getAllComments() {
    return this.commentService.getAllComments();
  }

  @Get(':id')
  async getComment(@Param('id') id: number) {
    return this.commentService.getCommentById(id);
  }

  @Get('publication/:publicationId')
  async getCommentsByPost(@Param('publicationId') publicationId: number) {
    return this.commentService.getCommentsByPostId(publicationId);
  }
}
