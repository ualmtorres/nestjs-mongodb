import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  genre: string;

  @Prop()
  description: string;

  @Prop()
  author: string;

  @Prop()
  pages: number;

  @Prop()
  image_url: string;

  @Prop([String])
  keywords: string[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
