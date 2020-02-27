const Controller = require(`${config.path.controller}/Controller`);
module.exports = new class GroupnewsController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1
    //     this.model.GroupNews.paginate({} , { page , limit : 10, sort:{ createdAt:'desc' } , populate : ['user'] })
    //         .then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new GroupnewsTransform().withPaginate().transformCollection(result),
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
        this.model.GroupNews.find({}).sort({group_name:-1}).exec((err , groupnews) => {
            if(err) throw err;
            if(groupnews) {
                return res.json ({
                    data: groupnews,
                    success: true
                });
            }
            res.json({
                data : 'هیچ گروه خبری وجود ندارد',
                success : false
            })
        });
    }

    single(req, res) {
        req.checkParams('id' , 'ای دی وارد شده صحیح نیست').isMongoId();
        if(this.showValidationErrors(req, res))
            return;
        this.model.GroupNews.findById(req.params.id , (err , groupnews) => {
            if(groupnews) {
                return res.json({
                    data : groupnews,
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
        req.checkBody('group_name' , '  گروه خبری نمیتواند خالی بماند').notEmpty();

        this.escapeAndTrim(req , 'name ');
        if(this.showValidationErrors(req, res))
            return;
        let newGroupNews = new this.model.GroupNews({
            group_name : req.body.group_name,
          
        })
        newGroupNews.save(err => {
            if(err) throw err;
            res.json(' گروه خبری  با موفقیت ثبت شد');
        })
    }

    update(req ,res) {
        req.checkParams('id' , 'ای دی وارد شده صحیح نیست').isMongoId();
        if(this.showValidationErrors(req, res))
            return;
        this.model.GroupNews.findByIdAndUpdate(req.params.id ,
            {
                group_name : req.body.group_name,

            },
            (err , groupnews) => {
                res.json('ویرایش با موفقیت انجام شد');
            });
    }

    destroy(req ,res) {
        req.checkParams('id' , 'ای دی وارد شده صحیح نیست').isMongoId();

        if(this.showValidationErrors(req, res))
            return;

        this.model.GroupNews.findByIdAndRemove(req.params.id , (err , groupnews) => {
            if(err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
}