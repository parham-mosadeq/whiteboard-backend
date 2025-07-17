import { TypeOrmModule } from '@nestjs/typeorm';
import { Canvas } from 'src/entities';

export const typeOrmConfigs = TypeOrmModule.forRoot({
  type: 'sqlite',
  database: './database/whiteboard.db',
  synchronize: true,
  logging: true,
  entities: [Canvas],
});
