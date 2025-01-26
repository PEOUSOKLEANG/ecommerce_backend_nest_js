import { Prop, Schema } from "@nestjs/mongoose";


enum PlateFrom{
    Facebook = 'facebook',
    Instagram = 'instagram ',
    Twitter = 'twitter'
}

@Schema({timestamps:true})
export class SocialProfile {

    @Prop({
        type: String,
        enum:PlateFrom,
    })
    platform:PlateFrom;

    @Prop({})
    platform_user: string;

}
