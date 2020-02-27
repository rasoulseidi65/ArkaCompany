// Model
const User = require(`${config.path.model}/user`);
const News = require(`${config.path.model}/news`);
const Product = require(`${config.path.model}/product`);
const Comment = require(`${config.path.model}/comment`);
const Answer = require(`${config.path.model}/answer`);
const Header = require(`${config.path.model}/header`);
const Card = require(`${config.path.model}/card`);
const Article = require(`${config.path.model}/article`);
const GroupNews = require(`${config.path.model}/groupnews`);
module.exports = class Controller {
    constructor() {
        this.model = { News , User , Product , Comment , Answer , Header , Card , Article ,GroupNews }
    }
    showValidationErrors(req , res , callback) {
        let errors = req.validationErrors();
        if(errors) {
            res.status(422).json({
                message : errors.map(error => {
                    return {
                        'field' : error.param,
                        'message' : error.msg
                    }
                }),
                success : false
            });
            return true;
        }
        return false
    }


    escapeAndTrim(req , items) {
        items.split(' ').forEach(item => {
            req.sanitize(item).escape();
            req.sanitize(item).trim();            
        });
    }
}