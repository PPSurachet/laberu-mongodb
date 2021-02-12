import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


export type ImageDataDocument = ImageDatum & Document;


@Schema({ collection: "image_data" })
export class ImageDatum {
    @Prop({ required: true })
    shortcode: String;
}


export const ImageDataSchema = SchemaFactory.createForClass(ImageDatum);