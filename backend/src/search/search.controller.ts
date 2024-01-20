import { Body, Controller, Get, Post } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  getHello(): string {
    return this.searchService.getHello();
  }

  @Post()
  search(@Body() body: any): any {
    return this.searchService.search({
      ...body,
      searchId: randomUUID(),
    });
  }
}
