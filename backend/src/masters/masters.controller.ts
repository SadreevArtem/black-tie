import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { MastersService } from './masters.service';
import { JwtGuard } from 'src/guard/jwt.guard';

@Controller('masters')
export class MastersController {
  constructor(private readonly mastersService: MastersService) {}
  @Get()
  async findAll() {
    return this.mastersService.findAll();
  }
  @UseGuards(JwtGuard)
  @Get('all')
  async findAllAdmin() {
    return this.mastersService.findAllAdmin();
  }
  @UseGuards(JwtGuard)
  @Get('all/:id')
  async findByIdAdmin(@Param('id') id: string) {
    return this.mastersService.findByIdAdmin(+id);
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.mastersService.findById(+id);
  }

  @UseGuards(JwtGuard)
  @Post()
  async create(@Body() createMasterDto) {
    return this.mastersService.create(createMasterDto);
  }
  @UseGuards(JwtGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateMasterDto) {
    await this.mastersService.update(+id, updateMasterDto);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.mastersService.remove(+id);
  }
}
