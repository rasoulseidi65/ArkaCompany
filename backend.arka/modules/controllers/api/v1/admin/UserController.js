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
                data: 'یافت نشد',
                success: false
            })
        })
    }

    store(req, res) {
        req.checkBody('name', ' نام نمیتواند خالی بماند').notEmpty();
        req.checkBody('email', ' ایمیل نمیتواند خالی بماند').notEmpty();
        req.checkBody('password', 'پسورد نمیتواند خالی بماند').notEmpty();
        req.checkBody('phone', ' تلفن نمیتواند خالی بماند').notEmpty();
        req.checkBody('address', 'آدرس نمیتواند خالی بماند').notEmpty();
        req.checkBody('type', 'نوع کاربر را مشخص کنید').notEmpty();



        this.escapeAndTrim(req, 'name email password phone address type');
        if (this.showValidationErrors(req, res))
            return;
        let newUser = new this.model.User({
         
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            phone: req.body.phone,
            address: req.body.address,
            type: req.body.type
         
        })
        newUser.save(err => {
            if (err) throw err;
            res.json('کاربر با موفقیت ثبت شد');
        })
    }

    update(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();
        if (this.showValidationErrors(req, res))
            return;
        this.model.User.findByIdAndUpdate(req.params.id,
            {
              
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                phone: req.body.phone,
                address: req.body.address,
                type: req.body.type
            },
            (err, user) => {
                res.json('ویرایش با موفقیت انجام شد');
            });
    }

    destroy(req, res) {
        req.checkParams('id', 'ای دی وارد شده صحیح نیست').isMongoId();

        if (this.showValidationErrors(req, res))
            return;

        this.model.User.findByIdAndRemove(req.params.id, (err, user) => {
            if (err) throw err;
            res.json('اطلاعات با موفقیت حذف شد');
        })
    }
    uploadImage(req, res) {
        res.json(req.file);
        if (req.file) {
            res.json({
                message: 'فایل شما با موفقیت آپلود گردید',
                data: {
                    imagePath: 'http://localhost:8080/' + req.file.path.replace(/\\/g, '/')
                },
                success: true
            })
        } else {
            res.json({
                message: 'فایل شما آپلود نشد',
                success: false
            })
        }
    }
}