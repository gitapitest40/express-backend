const mongoose = require("mongoose");
let Schema = mongoose.Schema;

let profileSchema = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    addresses:[{
        street1:  {
      type: String,
    },
        street2:  {
      type: String,
    },
        city:  {
      type: String,
    },
        state:  {
      type: String,
    },
        country:  {
      type: String,
    },
        pincode:  {
            type: Number,
          },
    }],
    remove: {
        type: Boolean,
    },
  },
  { timestamps: true }
);

let Profile = mongoose.model("profile", profileSchema);

module.exports = Profile;