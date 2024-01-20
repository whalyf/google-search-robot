import { SaveSearchDto } from './dto/save-search.dto';
import { ISearch } from './interface/search.interface';
import { SearchService } from './search.service';
export declare class SearchController {
    private readonly searchService;
    constructor(searchService: SearchService);
    search(body: SaveSearchDto): Promise<ISearch>;
    findAll(): Promise<ISearch[]>;
}
