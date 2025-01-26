import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Credential } from '../../credentials/entities/credential.entity';
// import { v4 as uuidv4 } from 'uuid';


export type UserDocument = User & Document;

@Schema({ timestamps: true }) // Adds createdAt and updatedAt automatically
export class User {

  // @Prop({
  //   type: String,
  //   default: uuidv4, // Automatically generate a UUID
  // })
  // _id: string;

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

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Credential', required: true })
    userId: Credential[];

}

export const UserSchema = SchemaFactory.createForClass(User);
