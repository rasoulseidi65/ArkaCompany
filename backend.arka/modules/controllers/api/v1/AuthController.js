const Controller = require(`${config.path.controller}/Controller`);
const UserTransform = require(`${config.path.transform}/v1/UserTransform`);
const bcrypt = require('bcrypt');

module.exports = new class AuthController extends Controller {
    register(req , res) {  
        req.checkBody('name' , 'وارد کردن فیلد نام الزامیست').notEmpty();
        req.checkBody('email' , 'وارد کردن فیلد ایمیل الزامیست').notEmpty();
        req.checkBody('password' , 'وارد کردن فیلد پسورد الزامیست').notEmpty();
        req.checkBody('email' , 'فرمت ایمیل وارد شده صحیح نیست').isEmail();
        req.checkBody('phone' , 'وارد کردن فیلد تلفن الزامیست').notEmpty();
        req.checkBody('address' , 'وارد کردن فیلد ادرس الزامیست').notEmpty();
        req.checkBody('type' , 'وارد کردن فیلد نوع الزامیست').notEmpty();
        
        if(this.showValidationErrors(req, res)) 
            return;

        this.model.User({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password,
            phone : req.body.phone,
            address : req.body.address,
            type : req.body.type
        }).save(err => {
            if(err) {
                if(err.code == 11000) {
                    return res.json({
                        data : 'ایمیل نمی تواند تکراری باشد',
                        success : false
                    })
                } else {
                    throw err;
                }
            }

            return res.json({
                data : 'کاربر با موفقیت عضو وبسایت شد',
                success : true
            });
        })
    }

    login(req , res) {
        req.checkBody('email' , 'وارد کردن فیلد ایمیل الزامیست').notEmpty();
        req.checkBody('password' , 'وارد کردن فیلد پسورد الزامیست').notEmpty();

        if(this.showValidationErrors(req, res)) 
            return;

        this.model.User.findOne({ email : req.body.email } , (err , user) => {
            if(err) throw err;

            if(user == null) 
                return res.status(422).json({
                    data : 'اطلاعات وارد شده صحیح نیست',
                    success : false
                });

            bcrypt.compare(req.body.password , user.password , (err , status) => {

                if(! status) 
                    return res.status(422).json({
                        success : false,
                        data : 'پسورد وارد شده صحیح نمی باشد'
                    })
              

                return res.json({
                    data : new UserTransform().transform(user,true),
                    success : true
                });  
            })
        })

    }
}