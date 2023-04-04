import express from "express";
import { createNote, getNotes, updateNote, deleteNote } from "./function.js";

const route = express.Router();

route.get("/", function (req, res) {
  res.send("Welcome to backend");
});

route.post("/notes/create", createNote);
route.get("/notes/get", getNotes);
route.post("/notes/update", updateNote);
route.post("/notes/delete", deleteNote);

export default route;
