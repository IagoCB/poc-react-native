import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  userId: {
    type: String,
  },
  userName: {
    type: String,
  },
  userEmail: {
    type: String,
    unique: true,
  },
  userAvatar: {
    type: String,
  },
});

const UserModel = mongoose.model('UserModel', UserSchema);

export default UserModel;
