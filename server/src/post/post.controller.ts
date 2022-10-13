import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';
import { PostId, PostItem } from 'custom-type';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get('/main')
  async getMainPost() {
    return await this.postService.getMainPost();
  }

  @Get('/channel')
  getChannelPost() {
    return this.postService.getChannelPost();
  }

  @Get('/ranking')
  async getRankedPost(): Promise<PostItem[]> {
    return await this.postService.getRankedPost();
  }

  @Get('/search/:keyword')
  getSearchResult(@Param('keyword') keyword: string): PostItem[] {
    return this.postService.getSearchResult(keyword);
  }

  @Get('/test')
  setCacheTest() {
    return this.postService.setCacheTest();
  }

  @Get('/:postid')
  getPostById(@Param('postid') postid: PostId): PostItem {
    return this.postService.getPostById(postid);
  }
}
