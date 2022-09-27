import { PipeTransform, BadRequestException } from '@nestjs/common';
import { BoardStatus } from '../boards.status';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions: [BoardStatus, BoardStatus] = ['PUBLIC', 'PRIVATE'];

  transform(value: any) {
    value = value.toUpperCase();
    if (this.isStatusValid(value) === false) {
      throw new BadRequestException(`${value}는 유효하지 않은 상태값이다...!`);
    }

    return value;
  }

  private isStatusValid(status: string): boolean {
    return status === this.StatusOptions[0] || status === this.StatusOptions[1];
  }
}
