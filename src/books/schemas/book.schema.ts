import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CommentSchema } from './comment.schema';

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

  @Prop([CommentSchema])
  comments: Comment[];
}

export const BookSchema = SchemaFactory.createForClass(Book);
