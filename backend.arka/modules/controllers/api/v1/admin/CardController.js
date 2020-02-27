const Controller = require(`${config.path.controller}/Controller`);
const CardTransform = require(`${config.path.transform}/v1/CardTransform`);
module.exports = new class CardController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1
    //     this.model.Card.paginate({} , { page , limit : 10, sort:{ createdAt:'desc' } , populate : ['user'] })
    //         .then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new CardTransform().withPaginate().transformCollection(result),
    //                     success : true
    //                 });
    //             }
    //
    //             res.json({
    //                 message : 'اطلاعاتی وجود ندارد',
    //                 success : false
    //             })
    //         })
    //
    //         .catch(err => console.log(err));
    //
    // }
    index(req, res) {
        this.model.Card.find({}).sort({ title: -1 }).exec((err, card) => {
            if (err) throw err;
            if (card) {
                return res.json({
                    data: card,
                    success: true
                });
            }
            res.json({
                data: 'هیچ کاردی وجود ندارد',
                success: false
            })
        });
    }

    single(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Card.findById(req.params.id, (err, card) => {
            if (card) {
                return res.json({
                    data: card,
                    success: true
                })
            }
            res.json({
                data: 'یافت نشد',
                success: false
            })
        })
    }

    store(req, res) {
        // Validation
        req.checkBody('title', ' عنوان نمیتواند خالی بماند ').notEmpty();
        req.checkBody('name', 'نام محصول نمیتواند خالی بماند').notEmpty();
        req.checkBody('detail', ' جزئیات نمیتواند خالی بماند').notEmpty();
        req.checkBody('description', ' شرح محصول نمیتواند خالی بماند').notEmpty();
        req.checkBody('image', ' لطفا تصویر را درج کنید').notEmpty();

        this.escapeAndTrim(req, 'title name detail description image');

        if (this.showValidationErrors(req, res))
            return;
        let newCard = new this.model.Card({
            title: req.body.title,
            name: req.body.name,
            detail: req.body.detail,
            description: req.body.description,
            image: req.body.image
        })
        newCard.save(err => {
            if (err) throw err;
            res.json('کارد با موفقیت ثبت شد');
        })
    }

    update(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Card.findByIdAndUpdate(req.params.id,
            {
                title: req.body.title,
                name: req.body.name,
                detail: req.body.detail,
                description: req.body.description,
                image: req.body.image
            },
            (err, card) => {
                res.json('ویرایش با موفقیت انجام شد');
            });
    }

    destroy(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();

        if (this.showValidationErrors(req, res))
            return;

        this.model.Card.findByIdAndRemove(req.params.id, (err, card) => {
            if (err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
}