import { Injectable } from '@nestjs/common';
import { GetCanvasDto } from './dto';

@Injectable()
export class CanvasService {
  getRoom({ roomId }: GetCanvasDto) {
    return `here is your room :${roomId}`;
  }
  postRoom({ roomId }: GetCanvasDto) {
    return `here is your room CREATED :${roomId}`;
  }
}
