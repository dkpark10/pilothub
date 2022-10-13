import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Comment extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    author: string;

    @Column()
    description: string;

    @Column()
    date: string;

    @Column()
    like: number;

    @Column()
    hate: number;
}