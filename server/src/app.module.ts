import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { CommentModule } from './comment/comment.module';
import { Module, CacheModule, CacheStoreFactory, CacheStore } from '@nestjs/common';
import * as redisStore from 'cache-manager-ioredis';

@Module({
  imports: [
    CacheModule.registerAsync({
      useFactory: () => ({
        store: redisStore,
        host: 'localhost',
        port: 6379,
        ttl: 5,
      })
    }),
    CommentModule,
  ],
  controllers: [
    CommentController,
    AppController
  ],
  providers: [
    CommentService,
    AppService
  ],
})
export class AppModule { }
