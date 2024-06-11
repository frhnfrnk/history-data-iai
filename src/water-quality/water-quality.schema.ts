import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class WaterQuality extends Document {
  @Prop({ required: true })
  loc1: number;

  @Prop({ required: true })
  loc2: number;

  @Prop({ required: true })
  loc3: number;

  @Prop({ required: true })
  time: Date;
}

export const WaterQualitySchema = SchemaFactory.createForClass(WaterQuality);
