import { Prop, Schema } from "@nestjs/mongoose";

enum CartStatus{
    Active='active',
    Orders='orders',
    Abandonned='abandonned'

}

@Schema({
    timestamps:true
})
export class Cart {
    
    
    @Prop({
        type: String,
        enum:CartStatus,
    })
    status:CartStatus

    // createBy


}
