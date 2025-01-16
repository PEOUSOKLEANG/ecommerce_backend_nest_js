import { Module } from '@nestjs/common';
import { SocialProfilesService } from './social_profiles.service';
import { SocialProfilesController } from './social_profiles.controller';

@Module({
  controllers: [SocialProfilesController],
  providers: [SocialProfilesService],
})
export class SocialProfilesModule {}
