import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Canvas {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, type: 'string' })
  roomId: string;

  @Column({ type: 'json' })
  state: '';
}
