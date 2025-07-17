import { Controller, Get, Query } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { GetCanvasDto } from './dto';

@Controller('/canvas')
export class CanvasController {
  constructor(private readonly canvasService: CanvasService) {}

  @Get('/room')
  getCanvas(@Query() query: GetCanvasDto) {
    return this.canvasService.getRoom({ roomId: query.roomId });
  }
}
