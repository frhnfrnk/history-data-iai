import { Module } from '@nestjs/common';
import { WaterQualityService } from './water-quality.service';
import { WaterQualityController } from './water-quality.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WaterQuality, WaterQualitySchema } from './water-quality.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WaterQuality.name, schema: WaterQualitySchema },
    ]),
  ],
  providers: [WaterQualityService],
  controllers: [WaterQualityController],
})
export class WaterQualityModule {}
