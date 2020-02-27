const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePaginate=require('mongoose-paginate');
const ArticleSchema = new Schema({
    title : { type : String , required : true},
    abstract : { type : String , required : true},
    keyword : { type : String },
    author : { type : String , required : true},
    file : { type :String, required : false},
    image : { type :String,required:true},
    detail : { type :String,required:true},
    key_article : {type:String,required:true},
    key_titlearticle : {type:String,required:true},
    key_imagearticle : {type:String,required:true}
});
ArticleSchema.plugin(timestamps);
ArticleSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('Article' , ArticleSchema);