import { Controller, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { NavName, PostItem } from 'custom-type';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Get('/:category')
  async getDataByCategory(@Param('category') category: string): Promise<PostItem[]> {
    return await this.appService.getDataByCategory(category as NavName);
  }

  @Get()
  getHome() {
    return this.appService.getServerSideRender();
  }
}
