import { Controller, Get, Post, Param, Header } from '@nestjs/common';
import { AppService } from './app.service';
import { NavName, PostItem } from 'custom-type';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) { }

  @Get('/test')
  @Header('Cache-Control', 'max-age=600')
  getTest(): string {
    console.log("들어옴");
    return "테스틉니당 다시 테스트 한다!";
  }

  @Get('/:category')
  async getDataByCategory(
    @Param('category') category: string,
  ): Promise<PostItem[]> {
    return await this.appService.getDataByCategory(category as NavName);
  }

  @Get('/')
  async getHome(): Promise<string> {
    return await this.appService.getServerSideRender();
  }
}
