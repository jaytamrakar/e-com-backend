const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: Buffer, required: true },
  name: { type: String },
  role: { type: String, required: true, default: "user" },
  addresses: { type: [Schema.Types.Mixed] },
  orders: { type: [Schema.Types.Mixed] },
  salt: { type: Buffer },
});

const virtual = userSchema.virtual("id");
virtual.get(function () {
  return this._id;
});

userSchema.set("toJSON", {
  virtuals: true,
  virsonKeys: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

exports.User = mongoose.model("User", userSchema);
