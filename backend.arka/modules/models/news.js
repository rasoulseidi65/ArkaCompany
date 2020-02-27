const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePaginate=require('mongoose-paginate');
const NewsSchema = new Schema({
    title : { type : String , required : true},
    short_news : { type : String , required : true},
    detail_news : { type : String , required : true},
    image_news : { type : String , required : true},
    group_news : { type :String,required:true},
    key_news : { type : String,required:true},
    key_titlenews : { type : String,required:true},
    key_imagenews : { type : String,required:true}
});
NewsSchema.plugin(timestamps);
NewsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('News' , NewsSchema);