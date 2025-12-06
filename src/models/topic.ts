import mongoose, { Schema } from 'mongoose'

const topicSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
)

// Optional chain protects against undefined mongoose.models during eval
const Topic = mongoose.models?.Topic || mongoose.model('Topic', topicSchema)
export default Topic
