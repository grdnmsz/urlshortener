import { Document, Schema, model } from "mongoose";

export interface IUrl extends Document {
  longUrl: string;
  shortUrl: string;
}

const UrlSchema = new Schema({
  longUrl: String,
  shortUrl: String,
});

const UrlModel = model<IUrl>("UrlModel", UrlSchema);
export default UrlModel;
