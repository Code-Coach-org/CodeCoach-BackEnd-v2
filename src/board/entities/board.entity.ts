import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { Article } from './article.entity';

@Entity({ name: 'board'})
@Unique(['name'])
export class Board {

    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({ unsigned: true })
    boardId!: number;

    @Column({
        type: 'varchar',
        length: 30,
        comment: '게시판 이름'
    })
    name!: string;

    @ManyToOne(type => User, user => user.id)
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({ nullable: false, unsigned: true })
    userId: number;

    @OneToMany(type => Article, article => article.board)
    article: Article[]

}
