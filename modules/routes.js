import express from "express";
import {
  createNote,
  getNotes,
  updateNote,
  deleteNote,
  getSingleNote,
} from "./notesFunctions.js";

const route = express.Router();

route.get("/", function (req, res) {
  res.send("Welcome to backend");
});

route.post("/create", createNote);
route.get("/get", getNotes);
route.get("/get-single-note/:id", getSingleNote);
route.put("/update", updateNote);
route.delete("/delete/:id", deleteNote);

export default route;
