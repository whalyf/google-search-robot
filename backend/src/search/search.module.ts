import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SearchSchema } from './schema/search.schema';
import { SearchController } from './search.controller';
import { SearchService } from './search.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Search', schema: SearchSchema }])],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
