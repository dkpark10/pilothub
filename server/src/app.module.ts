import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { Module, CacheModule } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import * as redisStore from 'cache-manager-ioredis';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
      ttl: 0,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'ssr/client'),
    }),
    ScheduleModule.forRoot(),
    PostModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
