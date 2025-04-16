import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';
import { USER_ROLE } from './user.constant';

const userSchema = new Schema<TUser>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    phone_number: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    address: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    needsPasswordChange: {
      type: Boolean,
      required: true,
      default: false,
    },
    passwordChangedAt: {
      type: Date,
    },
    role: {
      type: String,
      enum: Object.values(USER_ROLE), // 🔹 Updated roles dynamically
      default: USER_ROLE.tenant, // 🔹 Default role is "tenant"
    },
    status: {
      type: String,
      enum: ['active', 'blocked'],
      default: 'active',
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

// -----------------------

// 🔹 Hash password before saving
// userSchema.pre('save', async function (next) {
//   const user = this;

//   if (user.isModified('password')) {
//     user.password = await bcrypt.hash(user.password, Number(config.bcrypt_salt_rounds));
//   }
//   next();
// });
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, Number(config.bcrypt_salt_rounds));
  }
  next();
});


// 🔹 Hide password after saving
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

// 🔹 Static method: Check if user exists by email
userSchema.statics.isUserExistsById = async function (email: string) {
  return await User.findOne({ email }).select('+password');
};

// 🔹 Static method: Compare passwords
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword: string,
  hashedPassword: string,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

// 🔹 Check if JWT was issued before password was changed
userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number,
) {
  const passwordChangedTime = new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

// -----------------------

export const User = model<TUser, UserModel>('User', userSchema);
