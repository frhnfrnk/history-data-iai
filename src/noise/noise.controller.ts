import { Controller, Get, Post, Body } from '@nestjs/common';
import { NoiseService } from './noise.service';

@Controller('noise')
export class NoiseController {
  constructor(private readonly noiseService: NoiseService) {}

  @Post()
  async create(@Body() createNoiseDto: any) {
    return this.noiseService.create(createNoiseDto);
  }

  @Get()
  async findAll() {
    return this.noiseService.findAll();
  }
}
