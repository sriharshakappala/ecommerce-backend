const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
