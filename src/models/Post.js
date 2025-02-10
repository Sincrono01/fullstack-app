// models/Post.js
import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
});

// Rename the model to PostModel
const PostModel = mongoose.models.Post || mongoose.model('Post', PostSchema);

export default PostModel;