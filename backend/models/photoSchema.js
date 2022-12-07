const mongoose = require('mongoose');

const tagSchema = mongoose.Schema(
    {
        name: { type: String, required: false, unique: true },
    }
);

const photoSchema = mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { data: Buffer, contentType: String },
        tag: [tagSchema],
    },
    {
        timestamps: true,
    }
);

const Photo = mongoose.model('Photo', photoSchema);
module.exports = { Photo };
