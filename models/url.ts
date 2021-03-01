import { Document, Schema, model, connection } from "mongoose";

export interface IUrl extends Document {
  url: string;
  shortUrl: string;
}

delete connection.models["UrlModel"]; // prevent from multiple model definitions

const UrlSchema = new Schema({
  url: { type: String },
  shortUrl: { type: String },
});

const UrlModel = model<IUrl>("UrlModel", UrlSchema);
export default UrlModel;
