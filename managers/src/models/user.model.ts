import mongoose from "mongoose";

export interface UserDocument extends mongoose.Document {
  uid: string;
  first_name: string;
  last_name: string;
  disabled:boolean;
  verified:boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
  {
    uid: { type: String, required: true, unique: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    disabled: { type: Boolean, default: false },
    verified: { type: Boolean, default: false },
  },
  { timestamps: true }
);



const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
