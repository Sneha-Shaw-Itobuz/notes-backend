import mongoose from "mongoose";
import { dbData } from "../config.js";
import { HttpError } from "../modules/errorHandler.js";

const url = `mongodb+srv://${dbData.username}:${dbData.pass}@cluster0.sxavqzw.mongodb.net/${dbData.dbName}?retryWrites=true&w=majority`;

export async function connection() {
  await mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDb");
    })
    .catch((err) => {
      new HttpError(err, 400, null);
    });
}
