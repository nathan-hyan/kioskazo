import { model, Schema } from 'mongoose';
import User from '@interfaces/users';
import { UserAuthLevel } from '@constants/userTypes';

// Types are for declaring privileges (0: super admin, 1: admin, 2: user)

const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    DNI: { type: Number, required: true },
    password: { type: String, required: true },
    type: { type: UserAuthLevel, required: true, default: UserAuthLevel.EMPLOYEE },
    storeId: { type: Schema.Types.ObjectId, ref: 'Stores', required: false },
    storeBranch: { type: String, required: false },
  },
  { timestamps: true },
);

export default model<User>('User', UserSchema);
