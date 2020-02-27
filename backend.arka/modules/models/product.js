const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePaginate = require('mongoose-paginate');
const ProductSchema = new Schema({
    title: { type: String, required: true },
    name: { type: String, required: true },
    detail: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: false }
});
ProductSchema.plugin(timestamps);
ProductSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Product', ProductSchema);
