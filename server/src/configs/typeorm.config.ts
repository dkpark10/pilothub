import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'zum1234',
  database: 'boards-app',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};

export const typeORMConfigMysql: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'zkzk1166591864$!',
  database: 'boards',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true,
};
