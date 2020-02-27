const mongoose = require('mongoose');
const mongoosePaginate=require('mongoose-paginate');
const Schema = mongoose.Schema;
const GroupNewsSchema = new Schema({
    group_name : { type : String , required : true}
});

GroupNewsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('groupnews' , GroupNewsSchema);