import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { PostId } from 'custom-type';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  // @Get('/test')
  // setMockData() {
  //   return this.postService.getMockData();
  // }

  @Get('/:postid')
  getPostById(@Param('postid') postid: PostId) {
    return this.postService.getPostById(postid);
  }
}
