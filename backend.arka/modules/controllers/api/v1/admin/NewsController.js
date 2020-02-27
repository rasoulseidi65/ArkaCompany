const Controller = require(`${config.path.controller}/Controller`);
const NewsTransform = require(`${config.path.transform}/v1/NewsTransform`);
module.exports = new class NewsController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1
    //     this.model.News.paginate({} , { page , limit : 10, sort:{ createdAt:'desc' } , populate : ['user'] })
    //         .then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new NewsTransform().withPaginate().transformCollection(result),
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
        this.model.News.find({}).sort({ title: -1 }).exec((err, news) => {
            if (err) throw err;
            if (news) {
                return res.json({
                    data: news,
                    success: true
                });
            }
            res.json({
                data: 'هیچ خبری وجود ندارد',
                success: false
            })
        });
    }

    single(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.News.findById(req.params.id, (err, news) => {
            if (news) {
                return res.json({
                    data: news,
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
        req.checkBody('title', 'عنوان خبر نمیتواند خالی بماند').notEmpty();
        req.checkBody('short_news', 'متن خبر نمیتواند خالی بماند').notEmpty();
        req.checkBody('detail_news', 'جزییات خبر نمیتواند خالی بماند').notEmpty();
        req.checkBody('image_news', 'تصویر خبر نمیتواند خالی بماند').notEmpty();
        req.checkBody('group_news', 'گروه خبر نمیتواند خالی بماند').notEmpty();
        req.checkBody('key_news', 'کلید خبر نمیتواند خالی بماند').notEmpty();
        req.checkBody('key_titlenews', 'کلید عنوان خبر نمیتواند خالی بماند').notEmpty();
        req.checkBody('key_imagenews', 'کلید عکس خبر نمیتواند خالی بماند').notEmpty()

        this.escapeAndTrim(req, 'title short_news detail_news group_news key_news key_titlenews key_imagenews'); if (this.showValidationErrors(req, res))
            return;
        let newNews = new this.model.News({
            title: req.body.title,
            short_news: req.body.short_news,
            detail_news: req.body.detail_news,
            image_news: req.body.image_news,
            group_news: req.body.group_news,
            key_news: req.body.key_news,
            key_titlenews: req.body.key_titlenews,
            key_imagenews: req.body.key_imagenews
        })
        newNews.save(err => {
            if (err) throw err;
            res.json('خبر با موفقیت ثبت شد');
        })
    }

    update(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.News.findByIdAndUpdate(req.params.id,
            {
                title: req.body.title,
                short_news: req.body.short_news,
                detail_news: req.body.detail_news,
                image_news: req.body.image_news,
                group_news: req.body.group_news,
                key_news: req.body.key_news,
                key_titlenews: req.body.key_titlenews,
                key_imagenews: req.body.key_imagenews
            },
            (err, news) => {
                res.json('ویرایش با موفقیت انجام شد');
            });
    }

    destroy(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();

        if (this.showValidationErrors(req, res))
            return;

        this.model.News.findByIdAndRemove(req.params.id, (err, news) => {
            if (err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
}