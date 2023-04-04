import express from "express";
import { createNote, getNotes, updateNote, deleteNote,getSingleNote } from "./function.js";

const route = express.Router();

route.get("/", function (req, res) {

  res.send("Welcome to backend");
});

route.post("/notes/create", function (req, res) {
  createNote(req, res)
});
route.get("/notes/get", getNotes);
route.get("/notes/get-single-note/:id", getSingleNote);
route.post("/notes/update", updateNote);
route.post("/notes/delete", deleteNote);

export default route;
