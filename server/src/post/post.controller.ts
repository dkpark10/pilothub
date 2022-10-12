import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { PostId } from 'custom-type';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/ranking')
  async getRankedPost() {
    return await this.postService.getRankedPost();
  }

  @Get('/:postid')
  getPostById(@Param('postid') postid: PostId) {
    return this.postService.getPostById(postid);
  }
}
