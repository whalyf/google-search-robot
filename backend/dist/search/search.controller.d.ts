import { SearchService } from './search.service';
export declare class SearchController {
    private readonly appService;
    constructor(appService: SearchService);
    search(body: any): any;
}
