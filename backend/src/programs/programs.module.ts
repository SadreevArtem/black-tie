import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Programm } from './entities/programm.entity';
import { ProgramsService } from './programs.service';
import { ProgramsController } from './programs.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Programm])],
  exports: [ProgramsService],
  providers: [ProgramsService],
  controllers: [ProgramsController],
})
export class ProgramsModule {}
