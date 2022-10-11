import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

(async function () {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: '*',
  });
  const PORT = 3000;
  console.log(`서버실행 ${PORT}`);
  await app.listen(PORT);
})();
