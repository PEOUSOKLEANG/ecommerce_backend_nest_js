import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { SocialProfilesModule } from './modules/social_profiles/social_profiles.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce2025'),
    UsersModule, SocialProfilesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
