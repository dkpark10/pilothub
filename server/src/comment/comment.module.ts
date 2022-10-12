import { Module, CacheModule } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentController } from './commet.controller';

@Module({
  imports: [CacheModule.register()],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
