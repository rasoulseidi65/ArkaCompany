const Transform = require('./../Transform');

module.exports = class HeaderTransform extends Transform {

    transform(item) {

        return {
            'title': item.title,
            'detail': item.detail,
            'link': item.link,
            'image': item.image,
            'key_image': item.key_image
        }
    }

}