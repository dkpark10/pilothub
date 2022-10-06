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
      title: "타이틀입니당",
      description: "댓글냉용"
    };

    return this.commentService.setComment('hub1', data);
  }
}
