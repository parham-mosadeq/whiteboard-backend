import { Module } from '@nestjs/common';
import { CanvasController } from './canvas.controller';
import { CanvasService } from './canvas.service';
import { Canvas } from 'src/entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebsocketGateway } from 'src/websocket';

@Module({
  controllers: [CanvasController],
  providers: [CanvasService, WebsocketGateway],
  imports: [TypeOrmModule.forFeature([Canvas])],
})
export class CanvasModule {}
