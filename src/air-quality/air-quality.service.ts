import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AirQuality } from './air-quality.schema';

@Injectable()
export class AirQualityService {
  constructor(
    @InjectModel(AirQuality.name) private airQualityModel: Model<AirQuality>,
  ) {}

  async create(createAirQualityDto: any): Promise<AirQuality> {
    const createdAirQuality = new this.airQualityModel(createAirQualityDto);
    return createdAirQuality.save();
  }

  async findAll(): Promise<AirQuality[]> {
    return this.airQualityModel.find().sort({ time: 'asc' }).exec();
  }
}
