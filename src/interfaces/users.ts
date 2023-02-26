import { UserAuthLevel } from '@constants/userTypes';
import { Document, ObjectId } from 'mongoose';

export default interface User extends Document {
  name: string;
  username: string;
  password?: string;
  type: UserAuthLevel;
  storeId?: ObjectId;
  storeLocation?: ObjectId;
}
