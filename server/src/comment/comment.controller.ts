import { Controller, Get, Post } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) { }

  @Get()
  getComment() {
    return this.commentService.getComment();
  }

  @Post()
  setComment() {
    const data = {
      title: "허브줌 아주 조아",
      description: "헤헤 나 짱",
    }
    return this.commentService.setComment('hub_1', data);
  }
}
