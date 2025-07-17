import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigs } from './configs';
import { CanvasModule } from './canvas';
import { WebsocketGateway } from './websocket/websocket.gateway';

@Module({
  imports: [typeOrmConfigs, CanvasModule],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway],
})
export class AppModule {}
