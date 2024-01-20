import { Document } from "mongoose";

export interface ISearch extends Document{
  keywords: string;

  location: string;

  searchId: string;

  frequency: string;

  dateTime: Date;
}
