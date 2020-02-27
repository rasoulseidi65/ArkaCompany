const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePaginate = require('mongoose-paginate');
const HederSchema = new Schema({
    title: { type: String, required: true },
    detail: { type: String, required: true },
    link: { type: String },
    image: { type: String, required: true },
    key_image: { type: String, required: true }
});
HederSchema.plugin(timestamps);
HederSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Heder', HederSchema);

