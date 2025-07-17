import { Module } from '@nestjs/common';
import { CanvasController } from './canvas.controller';
import { CanvasService } from './canvas.service';
import { Canvas } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CanvasController],
  providers: [CanvasService],
  imports: [TypeOrmModule.forFeature([Canvas])],
})
export class CanvasModule {}
