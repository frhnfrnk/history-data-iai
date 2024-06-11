import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { NoiseService } from './noise.service';
import { NoiseController } from './noise.controller';
import { Noise, NoiseSchema } from './noise.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Noise.name, schema: NoiseSchema }]),
  ],
  providers: [NoiseService],
  controllers: [NoiseController],
})
export class NoiseModule {}
