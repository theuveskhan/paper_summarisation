const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
    title: String,
    authors: [String],
    summary: String,
    imageUrl: String,
    likeCount: { type: Number, default: 0 },
});

module.exports = mongoose.model('Paper', paperSchema);
