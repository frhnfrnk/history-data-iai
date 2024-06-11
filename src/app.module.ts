import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AirQualityModule } from './air-quality/air-quality.module';
import { WaterQualityModule } from './water-quality/water-quality.module';
import { NoiseModule } from './noise/noise.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Membuat ConfigModule tersedia secara global
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URL'),
      }),
      inject: [ConfigService],
    }),
    AirQualityModule,
    WaterQualityModule,
    NoiseModule,
  ],
})
export class AppModule {}
