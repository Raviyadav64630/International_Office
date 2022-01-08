import { Document, Schema, Model, model, Error } from "mongoose";

export interface IRoom extends Document {
    id: string; // number not working???
    name: string;
}

export const roomSchema: Schema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true,
        trim: true
    },
    name: String,
});

export const Room: Model<IRoom> = model<IRoom>("Room", roomSchema);