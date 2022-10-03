import { EntityRepository, Repository } from 'typeorm';
import { Board } from './boards.entity';
import { CreateBoardDto } from './dto/create-board-dto';

@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  async createBoard({ title, description }: CreateBoardDto): Promise<Board> {
    const board = this.create({
      title,
      description,
      status: 'PUBLIC',
    });

    await this.save(board);
    return board;
  }
}
