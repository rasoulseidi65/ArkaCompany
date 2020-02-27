const Controller = require(`${config.path.controller}/Controller`);
const HeaderTransform = require(`${config.path.transform}/v1/HeaderTransform`);
module.exports = new class HeaderController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1
    //     this.model.Header({} , { page , limit : 10, sort:{ createdAt:'desc' } , populate : ['user'] })
    //         .then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new HeaderTransform().withPaginate().transformCollection(result),
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
        this.model.Header.find({}).sort({ title: -1 }).exec((err, header) => {
            if (err) throw err;
            if (header) {
                return res.json({
                    data: header,
                    success: true
                });
            }
            res.json({
                data: 'هیچ هدری وجود ندارد',
                success: false
            })
        });
    }

    single(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Header.findById(req.params.id, (err, header) => {
            if (header) {
                return res.json({
                    data: header,
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
        req.checkBody('detail', ' جزییات نمیتواند خالی بماند').notEmpty();
        req.checkBody('link', 'لینک هدر نمیتواند خالی بماند').notEmpty();
        req.checkBody('image', ' لطفا تصویر را درج کنید').notEmpty();
        req.checkBody('key_image', ' لطفا کلید تصویر را وارد کنید').notEmpty();

        this.escapeAndTrim(req, 'title detail link image key_image');

        if (this.showValidationErrors(req, res))
            return;
        let newHeader = new this.model.Header({
            title: req.body.title,
            detail: req.body.detail,
            link: req.body.link,
            image: req.body.image,
            key_image: req.body.key_image

        })
        newHeader.save(err => {
            if (err) throw err;
            res.json('هدر با موفقیت ثبت شد');
        })
    }

    update(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.Header.findByIdAndUpdate(req.params.id,
            {
                title: req.body.title,
                detail: req.body.detail,
                link: req.body.link,
                image: req.body.image,
                key_image: req.body.key_image

            },
            (err, header) => {
                res.json('ویرایش با موفقیت انجام شد');
            });
    }

    destroy(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();

        if (this.showValidationErrors(req, res))
            return;

        this.model.Header.findByIdAndRemove(req.params.id, (err, header) => {
            if (err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
}