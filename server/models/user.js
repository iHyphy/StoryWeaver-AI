const mongoose = require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true // Trim whitespace from username
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Enter a valid email"
      ] // Validate email format using regular expression
    },
    password: {
      type: String,
      required: true
    }
  },
  {
    // Include virtual properties in JSON output
    toJSON: {
      virtuals: true
    },
    // Disable default 'id' field added by Mongoose
    id: false
  }
);

// Hash password before saving user
userSchema.pre('save', async function (next) {
  try {
    // Check if the password has been modified or is new
    if (!this.isModified('password')) {
      return next();
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    return next();
  } catch (error) {
    return next(error);
  }
});

module.exports = mongoose.model('User', userSchema);
