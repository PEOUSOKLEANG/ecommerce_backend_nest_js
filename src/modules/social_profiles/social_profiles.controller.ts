import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SocialProfilesService } from './social_profiles.service';
import { CreateSocialProfileDto } from './dto/create-social_profile.dto';
import { UpdateSocialProfileDto } from './dto/update-social_profile.dto';

@Controller('social-profiles')
export class SocialProfilesController {
  constructor(private readonly socialProfilesService: SocialProfilesService) {}

  @Post()
  create(@Body() createSocialProfileDto: CreateSocialProfileDto) {
    return this.socialProfilesService.create(createSocialProfileDto);
  }

  @Get()
  findAll() {
    return this.socialProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.socialProfilesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSocialProfileDto: UpdateSocialProfileDto) {
    return this.socialProfilesService.update(+id, updateSocialProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.socialProfilesService.remove(+id);
  }
}
