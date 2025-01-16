import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true }) // Adds createdAt and updatedAt automatically
export class User {
  @Prop({ required: true, unique: true }) // Unique constraint on email
  email: string;

  @Prop()
  phone?: string;

  @Prop({ enum: ['admin', 'user'], default: 'user' }) // Example role options
  role: string;

  @Prop()
  name?: string;

  @Prop()
  avatar?: string;

  @Prop()
  locale?: string;

  @Prop({ type: Date })
  lastLogin?: Date;

  @Prop({ type: Date })
  emailValidated?: Date;

  @Prop({ type: Date })
  phoneValidated?: Date;

  @Prop()
  bio?: string;

  @Prop()
  company?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
