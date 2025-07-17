import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigs } from './configs';

@Module({
  imports: [typeOrmConfigs],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
