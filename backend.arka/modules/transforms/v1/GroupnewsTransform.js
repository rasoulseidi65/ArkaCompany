const Transform = require('./../Transform');

module.exports = class GroupnewsTransform extends Transform {

    transform(item ) {
    
        return {
            'group_name' : item.group_name
        }
    } 

}