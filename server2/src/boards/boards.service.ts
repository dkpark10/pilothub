import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './boards.status';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board-dto';
import { BoardRepository } from './boards.repository';
import { Board } from './boards.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {
    console.log('??');
  }

  async getAllBoards(): Promise<Board[]> {
    return this.boardRepository.find();
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardRepository.createBoard(createBoardDto);
  }

  async getBoardById(id: number): Promise<Board> {
    const found = await this.boardRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`보드 아디${id} 없음`);
    }
    return found;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`아이디 없다 !~~${id}`);
    }
  }

  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);

    return board;
  }
}
