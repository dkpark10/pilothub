import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { NavName, PostItem } from 'custom-type';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) { }

  @Get()
  getHome() {
    return this.appService.getHome();
  }

  @Post()
  setHome() {
    return this.appService.setHome();
  }

  @Get('/:category')
  getDataByCategory(@Param('category') category: string): PostItem[] {
    return this.appService.getDataByCategory(category as NavName);
  }
}
