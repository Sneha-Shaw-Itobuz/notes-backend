import mongoose from "mongoose";
import express from "express";
import routes from "./modules/routes.js";

const app = express();

const PORT = 8080;

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening in ${PORT}`);
});

const url =
  "mongodb+srv://sneha:1234@cluster0.sxavqzw.mongodb.net/notes?retryWrites=true&w=majority";

async function connection() {
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

connection();
