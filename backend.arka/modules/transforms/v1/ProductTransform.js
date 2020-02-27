const Transform = require('./../Transform');

module.exports = class ProductTransform extends Transform {

    transform(item) {

        return {
            'title': item.title,
            'name': item.name,
            'detail': item.detail,
            'description': item.description,
            'image': item.image
        }
    }

}