const Transform = require('./../Transform');

module.exports = class CardTransform extends Transform {

    transform(item) {

        return {
            'title': item.title,
            'name': item.name,
            'description': item.description,
            'detail': item.detail,
            'image': item.image
        }
    }

}