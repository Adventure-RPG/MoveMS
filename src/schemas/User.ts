import * as mongoose from 'mongoose';

interface UserIF extends mongoose.Document {
  username: string;
  point: [number, number, number];
}

let UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  point: { type: [Number], default: [0.0, 0.0, 0.0] }
});

let User = mongoose.model<UserIF>('User', UserSchema);

export { User, UserIF };
