const Transform = require('./../Transform');


module.exports = class NewsTransform extends Transform {

    transform(item ) {
        
        return {
            'title' : item.title,
            'short_news' : item.short_news,
            'detail_news' : item.detail_news,
            'image_news' : item.image_news,
            'group_news' : item.author
        }
    }

   

}
