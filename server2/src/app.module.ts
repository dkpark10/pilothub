import { Module } from '@nestjs/common';
<<<<<<< HEAD
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
=======
import { BoardsModule } from './boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({ typeORMConfig }),
    BoardsModule,
    AuthModule
  ],
})
export class AppModule { }
>>>>>>> fd99c43ced0d2ba6f21739d20baa30789bd85331
