import { EntityRepository, Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';

interface CommentRepositoryAdaptor {
}

@EntityRepository(CommentEntity)
export class CommentRepository extends Repository<CommentEntity> {
  test() {
    console.log('레퍼지터리 왜 함수 없데??');
  }
}
