const Transform = require('./../Transform');

module.exports = class ArticeleTransform extends Transform {

    transform(item) {

        return {
            'title' : item.title,
            'abstract' : item.abstract,
            'detail' : item.detail,
            'image' : item.image,
            'author' : item.author
        }
    }

}