import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  isImportant: Boolean,
});

export default mongoose.model("notes", notesSchema);
