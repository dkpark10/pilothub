import { Injectable } from '@nestjs/common';
import hubData, { Item } from './assets/Lifehub';

@Injectable()
export class AppService {
  getHello(): Item[] {
    return hubData;
  }
}
