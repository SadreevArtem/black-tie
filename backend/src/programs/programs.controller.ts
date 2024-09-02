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
import { ProgramsService } from './programs.service';
import { JwtGuard } from 'src/guard/jwt.guard';

@Controller('programs')
export class ProgramsController {
  constructor(private readonly programsService: ProgramsService) {}
  @Get()
  async findAll() {
    return this.programsService.findAll();
  }
  @UseGuards(JwtGuard)
  @Get('all')
  async findAllAdmin() {
    return this.programsService.findAllAdmin();
  }
  @UseGuards(JwtGuard)
  @Get('all/:id')
  async findByIdAdmin(@Param('id') id: string) {
    return this.programsService.findByIdAdmin(+id);
  }
  @Get('id')
  async findOne(@Param('id') id: string) {
    return this.programsService.findOne(+id);
  }
  @UseGuards(JwtGuard)
  @Post()
  async create(@Body() createProgrammDto) {
    return this.programsService.create(createProgrammDto);
  }

  @UseGuards(JwtGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateProgrammDto) {
    await this.programsService.update(+id, updateProgrammDto);
  }
  @UseGuards(JwtGuard)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.programsService.remove(+id);
  }
}
