const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            min: 5,
            unique: true
        },
        password: {
            type: String,
            required: true,
        }
    }
)
const User = mongoose.model("user", UserSchema);
module.exports = User;