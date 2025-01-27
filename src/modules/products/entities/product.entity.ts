import { Prop, Schema } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class Product {
  @Prop()
  title: string;

  @Prop()
  picture: string;

  @Prop()
  sammury: string;

  @Prop()
  description: string;

  @Prop()
  price: string;

  @Prop()
  discount_type: string;

  @Prop()
  discount_value: string;

  @Prop()
  tags: string;

  //user
  //review
  //categories
}
