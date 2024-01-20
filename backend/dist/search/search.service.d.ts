import { Search } from './schemas/search.schema';
export declare class SearchService {
    sendDataToGoServer(data: Omit<Search, 'dateTime'>): Promise<Search>;
    saveDataProcessed(data: Search): Promise<void>;
    search(searchParams: Omit<Search, 'dateTime'>): Promise<any>;
}
