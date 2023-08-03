import mongoose from "mongoose";

const noteRequest = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String },
  is_archived: { type: Boolean, required: true },
  created_at: { type: Date, required: true },
  category: { type: String, required: true },
});

async function connectDB(DB_URL: string) {
  try {
    await mongoose.connect(DB_URL);
    console.log("Success connection");
  } catch (e) {
    throw new Error("Failed to connect DB");
  }
}

export { connectDB };
export default mongoose.model("notes", noteRequest);
