import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';
import mongoose from 'mongoose';

export type CommentDocument = Comment & Document;

@Schema()
export class Comment {
  @Prop()
  title: string;

  @Prop()
  stars: number;

  @Prop()
  comment: string;

  @Prop({ type: mongoose.Schema.Types.String, ref: 'User' })
  username: User;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
