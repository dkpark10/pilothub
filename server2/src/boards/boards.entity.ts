import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { BoardStatus } from './boards.status';

/**
 * @Entity 데코레이터 클래스는 Board 클래스가 엔티티임을 나타내는데 사용
 */
@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}
