import { Controller, Get, Post, Param, Body, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostService } from './post.service';
import { PostId, Comment } from 'custom-type';
import { CommentCredentialsDto } from './dto/comment.dto';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) { }

  // @Get('/test')
  // setMockData() {
  //   return this.postService.getMockData();
  // }

  @Get('/comment/:postid')
  getPostCommentById(@Param('postid') postid: PostId) {
    return this.postService.getPostCommentById(postid);
  }

  @Post('/comment')
  @UsePipes(ValidationPipe)
  setComment(@Body() commentItme: CommentCredentialsDto) {
    return this.postService.createCommentByPostId(commentItme);
  }

  @Get('/:postid')
  getPostById(@Param('postid') postid: PostId) {
    return this.postService.getPostById(postid);
  }
}