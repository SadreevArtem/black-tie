import { Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Programm {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({
    unique: false,
  })
  @Length(2, 30)
  name: string;
  @Column({ default: 'Описание программы' })
  @Length(2, 300)
  description: string;
  @Column({
    default: '',
  })
  image: string;
  @Column()
  currentPrice: string;
  @Column({ default: '' })
  services: string;
  @Column({ default: false })
  published: boolean;
  @Column()
  @CreateDateColumn()
  createdAt: Date;
  @Column()
  @UpdateDateColumn()
  updatedAt: Date;
}
