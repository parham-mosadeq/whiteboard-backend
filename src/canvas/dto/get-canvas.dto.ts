import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class GetCanvasDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(50)
  roomId: string;
}
