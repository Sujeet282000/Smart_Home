import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Device from './models/Device.js';

dotenv.config();
await mongoose.connect(process.env.MONGO_URI);

await Device.deleteMany();
await Device.insertMany([
  { name: 'Light', status: false },
  { name: 'AC', status: false },
  { name: 'Lock', status: false },
]);

console.log('Devices seeded');
process.exit();