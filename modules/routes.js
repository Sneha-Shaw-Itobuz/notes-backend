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

route.post("/notes/create", createNote);
route.get("/notes/get", getNotes);
route.get("/notes/get-single-note/:id", getSingleNote);
route.put("/notes/update", updateNote);
route.delete("/notes/delete", deleteNote);

export default route;
