import mongoose from 'mongoose';


const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'name is required',
  },
  created_date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed'],
    }],
    default: ['pending'],
  },

});

module.exports = mongoose.model('Tasks', TaskSchema);
