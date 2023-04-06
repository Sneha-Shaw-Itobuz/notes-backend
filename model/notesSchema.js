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
  Date:{
    type:Date,
    default:Date.now()
  }
});

export default mongoose.model("notes", notesSchema);
