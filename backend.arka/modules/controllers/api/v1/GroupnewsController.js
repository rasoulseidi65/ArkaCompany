const Controller = require(`${config.path.controller}/Controller`);
const GroupnewsTransform = require(`${config.path.transform}/v1/GroupnewsTransform`);

module.exports = new class GroupnewsController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1;
    //     this.model.GroupNews.paginate({active:true} , { page , limit : 10,sort:{createdAt:'desc'},select:'firstname lastname nationalcode mobile address phone email nationalcard birthcertificate'}).then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new GroupnewsTransform().withPaginate().transformCollection(result),
    //                     success : true
    //                 });
    //             }
    //
    //             res.json({
    //                 message : 'گروه خبری وجود ندارد',
    //                 success : false
    //             })
    //         })
    //         .catch(err => console.log(err));
    // }
  
    index(req, res) {
        this.model.GroupNews.find({}).sort({ group_name: -1 }).exec((err, groupnews) => {
            if (err) throw err;
            if (groupnews) {
                return res.json({
                    data: groupnews,
                    success: true
                });
            }
            res.json({
                data: 'هیچ گروه خبری وجود ندارد',
                success: false
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

 
  }
