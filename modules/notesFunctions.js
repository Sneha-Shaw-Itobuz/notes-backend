import notesModel from "../model/notesSchema.js";
import { HttpError } from "./errorHandler.js";

export const createNote = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    let createNote = await notesModel.create({
      title,
      content,
    });

    if (createNote) {
      res.status(200).json({
        success: true,
        message: "Note created successfully!",
        data: null,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const getNotes = async (req, res, next) => {
  try {
    const notes = await notesModel.find({});

    if (notes) {
      res.status(200).json({
        success: true,
        message: "Notes fetched successfully!",
        data: notes,
      });
    } else {
      next(new HttpError("Notes Not found!", 404, null));
    }
  } catch (error) {
    next(error);
  }
};

export const getSingleNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    const note = await notesModel.findById(id);

    if (note) {
      res.status(200).json({
        success: true,
        message: "Note fetched successfully!",
        data: note,
      });
    } else {
      next(new HttpError("Note Not found!", 404, null));
    }
  } catch (error) {
    next(error);
  }
};

export const updateNote = async (req, res, next) => {
  try {
    const { id, title, content } = req.body;

    const note = await notesModel.findById(id);

    if (note) {
      note.title = title || note.title;
      note.content = content || note.content;

      await note.save();
      res.status(200).json({
        success: true,
        message: "Note Updated successfully!",
      });
    } else {
      next(new HttpError("Note Not found!", 404, null));
    }
  } catch (error) {
    next(error);
  }
};

export const deleteNote = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleted = await notesModel.findByIdAndDelete(id);

    if (deleted) {
      res.status(200).json({
        success: true,
        message: "Note Deleted successfully!",
        data: null,
      });
    } else {
      next(new HttpError("Note Not found!", 404, null));
    }
  } catch (error) {
    next(error);
  }
};
