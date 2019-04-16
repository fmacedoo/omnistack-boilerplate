const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    content: { type: String, required: true },
    sentAt: { type: Date, default: new Date() },
    user: { type: Schema.Types.ObjectId, ref: 'Users' }
});

const user = mongoose.model('Messages', schema);

module.exports = user;