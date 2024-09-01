import { Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Master {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    unique: false,
  })
  @Length(2, 30)
  name: string;
  @Column({ default: '' })
  avatar: string;
  @Column({ default: '' })
  imageSecond: string;
  @Column({ default: '' })
  imageThird: string;
  @Column()
  age: number;
  @Column()
  height: number;
  @Column()
  weight: number;
  @Column()
  size: number;
  @Column({ default: false })
  published: boolean;
  @Column()
  @CreateDateColumn()
  createdAt: Date;
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
