// src/users/user.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema({ timestamps: true }) // Automatically add createdAt and updatedAt fields
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ enum: ['admin', 'user'], default: 'user' })
  role: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  // Add other fields as necessary
}
export const UserSchema = SchemaFactory.createForClass(User);
