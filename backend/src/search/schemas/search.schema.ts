import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SearchDocument = HydratedDocument<Search>;

@Schema()
export class Search {
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

export const SearchSchema = SchemaFactory.createForClass(Search);
