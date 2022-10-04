import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Item } from './assets/Lifehub';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Item[] {
    return this.appService.getHello();
  }
}
