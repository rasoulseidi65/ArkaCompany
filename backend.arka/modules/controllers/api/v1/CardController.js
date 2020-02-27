const Controller = require(`${config.path.controller}/Controller`);
const CardTransform = require(`${config.path.transform}/v1/CardTransform`);

module.exports = new class CardController extends Controller {
    // index(req , res) {
    //     const page = req.query.page || 1;
    //     this.model.card.paginate({active:true} , { page , limit : 10,sort:{createdAt:'desc'},select:'firstname lastname nationalcode mobile address phone email nationalcard birthcertificate'}).then(result => {
    //             if(result) {
    //                 return res.json({
    //                     data : new AnswerTransform().withPaginate().transformCollection(result),
    //                     success : true
    //                 });
    //             }
    //
    //             res.json({
    //                 message : 'کاردی وجود ندارد',
    //                 success : false
    //             })
    //         })
    //         .catch(err => console.log(err));
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
                data: 'کارد یافت نشد',
                success: false
            })
        })
    }

 
  }
