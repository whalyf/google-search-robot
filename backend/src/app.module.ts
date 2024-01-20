import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SearchModule } from './search/search.module';

@Module({
  imports: [SearchModule, MongooseModule.forRoot('mongodb://localhost/nest'),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
