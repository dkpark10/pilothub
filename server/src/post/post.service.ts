import { Injectable } from '@nestjs/common';
import { mockData } from '@/assets/hubmock/index';
import { PostId, NavName } from 'custom-type';

@Injectable()
export class PostService {
  // eslint-disable-next-line
  constructor() {}

  getPostById(postid: PostId) {
    const category = postid.split('_')[0] as NavName;
    return mockData[category].find((postItem) => postItem.postId === postid);
  }
}
