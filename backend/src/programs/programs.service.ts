import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Programm } from './entities/programm.entity';
import { Repository } from 'typeorm';
import { CreateProgrammDto } from './dto/create-programm.dto';
import { UpdateProgrammDto } from './dto/update-programm.dto';

@Injectable()
export class ProgramsService {
  constructor(
    @InjectRepository(Programm)
    private programmRepository: Repository<Programm>,
  ) {}
  findAll(): Promise<Programm[]> {
    return this.programmRepository.find({
      where: { published: true },
      order: { createdAt: 'ASC' },
    });
  }
  findAllAdmin(): Promise<Programm[]> {
    return this.programmRepository.find({
      order: { createdAt: 'DESC' },
    });
  }
  findByIdAdmin(id: number): Promise<Programm | undefined> {
    return this.programmRepository.findOne({ where: { id } });
  }
  findOne(id: number): Promise<Programm | undefined> {
    return this.programmRepository.findOne({ where: { id, published: true } });
  }
  create(createProgrammDto: CreateProgrammDto): Promise<Programm> {
    return this.programmRepository.save(createProgrammDto);
  }
  update(id: number, updateProgrammDto: UpdateProgrammDto) {
    return this.programmRepository.update({ id }, updateProgrammDto);
  }
  remove(id: number) {
    return this.programmRepository.delete({ id });
  }
}
