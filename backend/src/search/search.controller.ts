import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SaveSearchDto } from './dto/save-search.dto';
import { ISearch } from './interface/search.interface';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  search(@Body() body: SaveSearchDto): Promise<ISearch> {
    return this.searchService.search({
      ...body,
      searchId: randomUUID(),
    });
  }

  @Get()
  findAll() {
    return this.searchService.findAll();
  }
}
