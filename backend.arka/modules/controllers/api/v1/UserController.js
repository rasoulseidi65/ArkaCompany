const Controller = require(`${config.path.controller}/Controller`);

module.exports = new class UserController extends Controller {
        index(req, res) {
            this.model.User.find({}).sort({ name: -1 }).exec((err, user) => {
                if (err) throw err;
                if (user) {
                    return res.json({
                        data: user,
                        success: true
                    });
                }
                res.json({
                    data: 'هیچ کاربری وجود ندارد',
                    success: false
                })
            });
        }
    
        single(req, res) {
            req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
            if (this.showValidationErrors(req, res))
                return;
            this.model.User.findById(req.params.id, (err, user) => {
                if (user) {
                    
                    return res.json({
                        data: user,
                        success: true
                    })
               
            }
                res.json({
                    data: 'کاربری یافت نشد',
                    success: false
                })
            })
        }
    
      uploadImage(req, res) {
    
            if (req.file) {
                res.json({
                    message: 'فایل شما با موفقیت آپلود گردید',
                    data: {
                        imagePath: 'http://localhost:8080/' + req.file.path.replace(/\\/g, '/')
                    },
                    success: true
                })
            } else {
                console.log(res.json)
                 res.json({
                    message: 'فایل شما آپلود نشد',
                    success: false
                })
            }
        }
}