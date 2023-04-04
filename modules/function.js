import notesSchema from "../model/notesSchema.js";

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    let createNote = await notesSchema.create({
      title,
      content,
    });

    if (createNote) {
      res.status(200).json({
        success: true,
        message: "Notes created successfully!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await notesSchema.find({});
    if (notes) {
      res.status(200).json({
        success: true,
        message: "Notes fetched successfully!",
        notes,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const updateNote = async (req, res) => {
  try {
    const { id, title, content } = req.body;
    const note = await notesSchema.findById(id);

    if (note) {
      note.title = title || note.title;
      note.content = content || note.content;

      await note.save();
      res.status(200).json({
        success: true,
        message: "Note Updated successfully!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};

export const deleteNote = async (req, res) => {
  try {
    const { id } = req.body;
    const deleted = await notesSchema.findByIdAndDelete(id)
    if(deleted){
        res.status(200).json({
            success: true,
            message: "Note Deleted successfully!",
          });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: error.message });
  }
};
