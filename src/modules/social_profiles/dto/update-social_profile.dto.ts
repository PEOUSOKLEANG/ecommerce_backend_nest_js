import { PartialType } from '@nestjs/mapped-types';
import { CreateSocialProfileDto } from './create-social_profile.dto';

export class UpdateSocialProfileDto extends PartialType(CreateSocialProfileDto) {}
