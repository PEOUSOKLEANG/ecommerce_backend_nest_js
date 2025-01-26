import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { SocialProfilesModule } from './modules/social_profiles/social_profiles.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CredentialsModule } from './modules/credentials/credentials.module';
import { OrdersModule } from './modules/orders/orders.module';
import { CartsModule } from './modules/carts/carts.module';
import { CartItemsModule } from './modules/cart_items/cart_items.module';
import { OrderLinesModule } from './modules/order_lines/order_lines.module';
import { ProductsModule } from './modules/products/products.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { CategoriesModule } from './modules/categories/categories.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce2025'),
    UsersModule, SocialProfilesModule, CredentialsModule, OrdersModule, CartsModule, CartItemsModule, OrderLinesModule, ProductsModule, ReviewsModule, CategoriesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
