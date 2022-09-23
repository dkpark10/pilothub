import { TypeOrmModuleOptions } from "@nestjs/typeorm";

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