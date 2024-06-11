import { Controller, Get, Post, Body } from '@nestjs/common';
import { AirQualityService } from './air-quality.service';

@Controller('air')
export class AirQualityController {
  constructor(private readonly airQualityService: AirQualityService) {}

  @Post()
  async create(@Body() createAirQualityDto: any) {
    return this.airQualityService.create(createAirQualityDto);
  }

  @Get()
  async findAll() {
    return this.airQualityService.findAll();
  }
}
