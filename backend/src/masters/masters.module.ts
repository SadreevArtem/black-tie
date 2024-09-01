import { Module } from '@nestjs/common';
import { MastersService } from './masters.service';
import { MastersController } from './masters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Master } from './entities/master.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Master])],
  providers: [MastersService],
  controllers: [MastersController],
})
export class MastersModule {}
