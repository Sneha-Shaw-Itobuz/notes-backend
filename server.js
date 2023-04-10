import express from "express";
import cors from "cors";
import routes from "./modules/routes.js";
import { connection } from "./db/dbConfig.js";

const app = express();

const PORT = 8080;

connection();

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());

app.use("/notes", routes);

app.use((req, res, next) => {
  next(new Error("Page not found"));
});

app.use((error, req, res, next) => {
  if (error) {
    res.status(500).json({
      data: null,
      message: error.message,
      success: false,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Listening in ${PORT}`);
});
