import { Inject, Injectable, CACHE_MANAGER, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { mockData } from '@/assets/hubmock/index';
import { CommentCredentialsDto } from './dto/comment.dto';

import { PostId, NavName, Comment } from 'custom-type';

@Injectable()
export class PostService {
  constructor(
    @Inject(CACHE_MANAGER) private readonly cacheManager: Cache
  ) { }

  getPostById(postid: PostId) {
    const category = postid.split("_")[0] as NavName;
    return mockData[category].find((postItem) => postItem.postId === postid);
  }

  async getPostCommentById(postid: string): Promise<Comment[]> {
    const comments = await this.cacheManager.get<Comment[]>(postid);
    if (comments === undefined) {
      throw new NotFoundException(`게시글이 없음 게시글 아이디: ${postid}`);
    }
    return comments || [];
  }

  async createCommentByPostId(commentItem: CommentCredentialsDto): Promise<boolean> {
    const { postId, author, description } = commentItem;

    try {
      const prevComments = await this.getPostCommentById(postId);
      const newComments: Comment[] = [
        ...prevComments,
        {
          commentId: `${postId}_${prevComments.length + 1}`,
          author,
          description,
          like: 0,
          hate: 0,
          date: this.parsingDate(),  
        },
      ];

      await this.cacheManager.set<Comment[]>(postId, newComments);
      return true;
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  async getMockData() {
    const data = {
      author: 'author',
      description: 'description',
      like: 0,
      hate: 0,
      date: this.parsingDate(),
    }

    try {
      await this.cacheManager.set('life_0', [data, data, data]);
    } catch (e) {
      throw new InternalServerErrorException('댓글을 생성하지 못함');
    }

    return await this.cacheManager.get('life_0');
  }

  parsingDate(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDay();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const { isitLessThan_10 } = this;

    return `${year}.${isitLessThan_10(month)
      }.${isitLessThan_10(day)
      } ${isitLessThan_10(hour)
      }:${isitLessThan_10(minute)
      }`
  }

  isitLessThan_10(value: number): number | string {
    return value < 10 ? `0${value}` : value;
  }
}