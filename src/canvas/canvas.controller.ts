import { Controller, Get, Query } from '@nestjs/common';
import { CanvasService } from './canvas.service';

@Controller('/canvas')
export class CanvasController {
  constructor(private readonly canvasService: CanvasService) {}

  @Get('/room')
  getCanvas(@Query('roomId') roomId: string) {
    return this.canvasService.getRoom(roomId);
  }
}
