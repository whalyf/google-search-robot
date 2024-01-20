import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SearchDocument = HydratedDocument<SearchClass>;

@Schema()
export class SearchClass {
  @Prop()
  keywords: string;

  @Prop()
  location: string;

  @Prop()
  searchId: string;

  @Prop()
  frequency: string;

  @Prop()
  dateTime: Date;
}

export const SearchSchema = SchemaFactory.createForClass(SearchClass);
