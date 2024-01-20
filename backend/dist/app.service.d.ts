import { SearchClass } from './search.schema';
export declare class AppService {
    getHello(): string;
    sendDataToGoServer(data: Omit<SearchClass, 'dateTime'>): Promise<SearchClass>;
    search(searchParams: Omit<SearchClass, 'dateTime'>): Promise<any>;
}
