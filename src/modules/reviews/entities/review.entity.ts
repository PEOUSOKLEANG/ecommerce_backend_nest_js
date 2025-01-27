import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Review {
  @Prop()
  rating: string;

  @Prop()
  comment: string;

  //userID(Reviwer on the product)
  //ProductID
}
