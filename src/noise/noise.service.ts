import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Noise } from './noise.schema';

@Injectable()
export class NoiseService {
  constructor(@InjectModel(Noise.name) private noiseModel: Model<Noise>) {}

  async create(createAirQualityDto: any): Promise<Noise> {
    const createdNoise = new this.noiseModel(createAirQualityDto);
    return createdNoise.save();
  }

  async findAll(): Promise<Noise[]> {
    return this.noiseModel.find().sort({ time: 'asc' }).exec();
  }
}
