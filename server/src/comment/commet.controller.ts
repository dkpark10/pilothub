import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { PostId } from 'custom-type';
import { CommentCredentialsDto } from './dto/comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get('/:postid')
  getPostCommentById(@Param('postid') postid: PostId) {
    return this.commentService.getPostCommentById(postid);
  }

  @Post()
  @UsePipes(ValidationPipe)
  setComment(@Body() commentItme: CommentCredentialsDto) {
    return this.commentService.createCommentByPostId(commentItme);
  }
}
