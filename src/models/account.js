const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  created_at: Date,
  updated_at: Date
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

accountSchema.plugin(uniqueValidator);

const Account = mongoose.model('Account', accountSchema);

module.exports = Account;
