import mongoose from "mongoose";

const url =
  "mongodb+srv://sneha:1234@cluster0.sxavqzw.mongodb.net/notes?retryWrites=true&w=majority";

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
      console.error(err);
    });
}
