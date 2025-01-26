import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from '../../users/entities/user.entity';

@Schema({ timestamps: true })
export class Credential extends Document {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  userId: User;

  @Prop({ type: String, required: true })
  providerId: string;

  @Prop({ type: String, required: true, unique: true })
  providerKey: string;

  @Prop({ type: String, required: true })
  hasher: string;

  @Prop({ type: String, required: true })
  passwordHash: string;

  @Prop({ type: String, required: true })
  passwordSalt: string;
}

export const CredentialSchema = SchemaFactory.createForClass(Credential);
