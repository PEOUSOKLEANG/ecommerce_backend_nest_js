import { Injectable } from '@nestjs/common';
import { CreateSocialProfileDto } from './dto/create-social_profile.dto';
import { UpdateSocialProfileDto } from './dto/update-social_profile.dto';

@Injectable()
export class SocialProfilesService {
  create(createSocialProfileDto: CreateSocialProfileDto) {
    return 'This action adds a new socialProfile';
  }

  findAll() {
    return `This action returns all socialProfiles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} socialProfile`;
  }

  update(id: number, updateSocialProfileDto: UpdateSocialProfileDto) {
    return `This action updates a #${id} socialProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} socialProfile`;
  }
}
