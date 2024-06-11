import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WaterQuality } from './water-quality.schema';

@Injectable()
export class WaterQualityService {
  constructor(
    @InjectModel(WaterQuality.name) private noiseModel: Model<WaterQuality>,
  ) {}

  async create(createWaterQualityDto: any): Promise<WaterQuality> {
    const createdWaterQuality = new this.noiseModel(createWaterQualityDto);
    return createdWaterQuality.save();
  }

  async findAll(): Promise<WaterQuality[]> {
    return this.noiseModel.find().sort({ time: 'asc' }).exec();
  }
}
