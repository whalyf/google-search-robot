import { Body, Controller, Post } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly appService: SearchService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Post()
  search(@Body() body: any): any {
    return this.appService.search({
      ...body,
      searchId: randomUUID(),
    });
  }
}
