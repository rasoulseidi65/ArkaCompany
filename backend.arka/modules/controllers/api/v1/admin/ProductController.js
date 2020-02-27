const Controller = require(`${config.path.controller}/Controller`);
const ProductTransform = require(`${config.path.transform}/v1/ProductTransform`);
module.exports = new class ProductController extends Controller { 
    // index(req , res) {
    //     const page = req.query.page || 1
    //     this.model.Product.paginate({} , { page , limit : 10, sort:{ createdAt:'desc' } , populate : ['user'] })
    //         .then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new ProductTransform().withPaginate().transformCollection(result),
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
    index(req , res) {
        this.model.Product.find({}).sort({title:-1}).exec((err , product) => {
            if(err) throw err;
            if(product) {
                return res.json ({
                    data: product,
                    success: true
                });
            }
            res.json({
                data : 'هیچ محصولی وجود ندارد',
                success : false
            })
        });
    }

    single(req, res) {
        req.checkParams('id' , 'ای دی وارد شده صحیح نیست').isMongoId();
        if(this.showValidationErrors(req, res))
            return;
        this.model.Product.findById(req.params.id , (err , product) => {
            if(product) {
                return res.json({
                    data : product,
                    success : true
                })
            }
            res.json({
                data : 'یافت نشد',
                success : false
            })
        })
    }

    store(req , res) {
        req.checkBody('title', ' عنوان نمیتواند خالی بماند ').notEmpty();
        req.checkBody('name', 'نام محصول نمیتواند خالی بماند').notEmpty();
        req.checkBody('detail', 'توضیحات محصول نمیتواند خالی بماند').notEmpty();
        req.checkBody('description', ' شرح محصول نمیتواند خالی بماند').notEmpty();
        req.checkBody('image', ' لطفا تصویر را درج کنید').notEmpty();

        this.escapeAndTrim(req, 'title name detail description image');
        if(this.showValidationErrors(req, res))
            return;
        let newProduct = new this.model.Product({
            title: req.body.title,
            name: req.body.name,
            detail: req.body.detail,
            description: req.body.description,
            image: req.body.image

        })
        newProduct.save(err => {
            if(err) throw err;
            res.json('محصول با موفقیت ثبت شد');
        })
    }

    update(req ,res) {
        req.checkParams('id' , 'ای دی وارد شده صحیح نیست').isMongoId();
        if(this.showValidationErrors(req, res))
            return;
        this.model.Product.findByIdAndUpdate(req.params.id ,
            {
                title: req.body.title,
                name: req.body.name,
                detail: req.body.detail,
                description: req.body.description,
                image: req.body.image
    
            },
            (err , product) => {
                res.json('ویرایش با موفقیت انجام شد');
            });
    }

    destroy(req ,res) {
        req.checkParams('id' , 'ای دی وارد شده صحیح نیست').isMongoId();

        if(this.showValidationErrors(req, res))
            return;

        this.model.Product.findByIdAndRemove(req.params.id , (err , product) => {
            if(err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
}