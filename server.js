import express from "express";
import cors from "cors";
import routes from "./modules/routes.js";
import { connection } from "./db/dbConfig.js";

const app = express();

const PORT = 8080;

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Listening in ${PORT}`);
});

connection();
