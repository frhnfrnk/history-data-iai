import { Body, Controller, Get, Post } from '@nestjs/common';
import { WaterQualityService } from './water-quality.service';

@Controller('water-quality')
export class WaterQualityController {
  constructor(private readonly waterQualityService: WaterQualityService) {}

  @Post()
  async create(@Body() createWaterQualityDto: any) {
    return this.waterQualityService.create(createWaterQualityDto);
  }

  @Get()
  async findAll() {
    return this.waterQualityService.findAll();
  }
}
