import { Injectable, NotFoundException } from '@nestjs/common';
import { GetCanvasDto } from './dto';
import { Canvas } from 'src/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CanvasService {
  constructor(
    @InjectRepository(Canvas)
    private readonly canvasRepository: Repository<Canvas>,
  ) {}

  async getRoom({ roomId }: GetCanvasDto) {
    const room = await this.canvasRepository.findOneBy({ roomId });
    if (!room) {
      throw new NotFoundException(`Room ${roomId} not found`);
    }
    return room;
  }
  async postRoom({ roomId }: GetCanvasDto): Promise<Canvas> {
    const newRoom = this.canvasRepository.create({
      roomId,
      state: {},
    });

    return await this.canvasRepository.save(newRoom);
  }
}
