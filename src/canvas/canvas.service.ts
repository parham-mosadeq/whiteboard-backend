import { Injectable } from '@nestjs/common';

@Injectable()
export class CanvasService {
  getRoom(roomId: string) {
    return `here is your room :${roomId}`;
  }
}
