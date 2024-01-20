/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { SaveSearchDto } from './dto/save-search.dto';
import { ISearch } from './interface/search.interface';
import { SearchClass } from './schema/search.schema';
export declare class SearchService {
    private readonly searchModel;
    constructor(searchModel: Model<ISearch>);
    findAll(): Promise<ISearch[]>;
    sendDataToGoServer(data: Omit<SearchClass, 'dateTime'>): Promise<SearchClass>;
    saveDataProcessed(saveSearchDto: SaveSearchDto): Promise<import("mongoose").Document<unknown, {}, ISearch> & ISearch & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    search(searchParams: Omit<SearchClass, 'dateTime'>): Promise<any>;
}
