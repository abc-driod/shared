const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
SALT_WORK_FACTOR = 10;
const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    address: { type: String },
    dob: { type: Date },
    last_login: { type: Date },
    firebase_uuid: { type: String, required: true, unique: true },
    demo_image:{type: String}
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
  }
);
const User = mongoose.model("user", userSchema);
module.exports = User;