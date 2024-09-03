import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Master } from './entities/master.entity';
import { Repository } from 'typeorm';
import { CreateMasterDto } from './dto/create-master.dto';
import { UpdateMasterDto } from './dto/update-master.dto';

@Injectable()
export class MastersService {
  constructor(
    @InjectRepository(Master)
    private masterRepository: Repository<Master>,
  ) {}
  findAllAdmin(): Promise<Master[]> {
    return this.masterRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  findAll(): Promise<Master[]> {
    return this.masterRepository.find({
      where: { published: true },
      order: { createdAt: 'ASC' },
    });
  }
  findById(id: number): Promise<Master | undefined> {
    return this.masterRepository.findOne({ where: { id, published: true } });
  }
  findByIdAdmin(id: number): Promise<Master | undefined> {
    return this.masterRepository.findOne({ where: { id } });
  }

  create(createMasterDto: CreateMasterDto): Promise<Master> {
    return this.masterRepository.save(createMasterDto);
  }
  update(id: number, updateMasterDto: UpdateMasterDto) {
    return this.masterRepository.update({ id }, updateMasterDto);
  }
  remove(id: number) {
    return this.masterRepository.delete({ id });
  }
}
