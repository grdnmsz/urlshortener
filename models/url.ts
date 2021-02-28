import { Document, Schema, model, connection } from "mongoose";

export interface IUrl extends Document {
  longUrl: string;
  shortUrl: string;
}

delete connection.models["UrlModel"];

const UrlSchema = new Schema({
  longUrl: { type: String },
  shortUrl: { type: String },
});

const UrlModel = model<IUrl>("UrlModel", UrlSchema);
export default UrlModel;
