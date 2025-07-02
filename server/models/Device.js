import mongoose from 'mongoose';

const deviceSchema = new mongoose.Schema({
  name: String,
  status: { type: Boolean, default: false },
});

export default mongoose.model('Device', deviceSchema);
