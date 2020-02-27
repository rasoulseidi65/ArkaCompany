const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePaginate = require('mongoose-paginate');
const CardSchema = new Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    detail: { type: String, required: true },
    image: { type: String, required: false }
});
CardSchema.plugin(timestamps);
CardSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Card', CardSchema);
