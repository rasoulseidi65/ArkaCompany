const Controller = require(`${config.path.controller}/Controller`);
const HeaderTransform = require(`${config.path.transform}/v1/HeaderTransform`);

module.exports = new class ProductController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1;
    //     this.model.Header.paginate({active:true} , { page , limit : 10,sort:{createdAt:'desc'},select:'firstname lastname nationalcode mobile address phone email nationalcard birthcertificate'}).then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new HeaderTransform().withPaginate().transformCollection(result),
    //                     success : true
    //                 });
    //             }
    //
    //             res.json({
    //                 message : 'پاسخی وجود ندارد',
    //                 success : false
    //             })
    //         })
    //         .catch(err => console.log(err));
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
                data: 'هیچ پاسخی وجود ندارد',
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
                data: 'پاسخی یافت نشد',
                success: false
            })
        })
    }

 
  }
