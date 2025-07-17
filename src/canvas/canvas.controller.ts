import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CanvasService } from './canvas.service';
import { GetCanvasDto } from './dto';

@Controller('/canvas')
export class CanvasController {
  constructor(private readonly canvasService: CanvasService) {}

  @Get('/room')
  getRoom(@Query() query: GetCanvasDto) {
    return this.canvasService.getRoom({ roomId: query.roomId });
  }

  @Post('/room')
  createRoom(@Body() body: GetCanvasDto) {
    return this.canvasService.postRoom({ roomId: body.roomId });
  }
}
