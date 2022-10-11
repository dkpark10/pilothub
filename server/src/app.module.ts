import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostModule } from './post/post.module';
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
      rootPath: join(__dirname, '..', 'ssr'),
    }),
    ScheduleModule.forRoot(),
    PostModule,
  ],
  controllers: [PostController, AppController],
  providers: [PostService, AppService],
})
export class AppModule {}
