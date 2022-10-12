import { Module, CacheModule } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';

@Module({
  imports: [CacheModule.register()],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
