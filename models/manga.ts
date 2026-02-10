import mongoose from "mongoose";

const MangaSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
});

// Next.js hot reload үед model дахин үүсэхээс сэргийлж байгаа
export default mongoose.models.Manga || mongoose.model("Manga", MangaSchema);
