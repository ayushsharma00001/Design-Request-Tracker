import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  assetType: { type: String, required: true },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  status: {
    type: String,
    enum: ['Pending', 'In Progress', 'Completed'],
    default: 'Pending'
  }
}, { timestamps: true });

export default mongoose.model('Request', requestSchema);