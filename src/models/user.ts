import mongoose, { Schema } from 'mongoose'

interface IUser {
  name: string
  email: string
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
})

// Optional chain on mongoose.models to avoid undefined during early module eval
const User = mongoose.models?.User || mongoose.model('User', userSchema)

export default User
