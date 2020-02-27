<template>

    <div style="margin-top: 8em">

        <Header></Header>
        <div class="content">
            <div class="row">
                <div class="col-md-4 col-sm-4 col-lg-4"></div>
                <div class="col-md-4 col-sm-4 col-lg-4  mt-2">
                    <img class="" src="../../assets/img/Arka_logo.png" style="width: 5rem;height: 5rem;margin-left: 40%"
                         alt="">

                </div>
                <div class="col-md-4 col-sm-4 col-lg-4 "></div>
            </div>
            <div class="row ">
                <div class="col-md-4 col-sm-4 col-lg-4 "></div>
                <div class="col-md-4 col-sm-4 col-lg-4 mt-2 ">

                    <div class="text" style="margin-left: 11.5rem">
                        <p style="color: black;font-weight: bold"> ایجاد حساب کاربری</p>

                    </div>
                    <div v-if="res_success">
                        <div class="alert alert-success" role="alert" >
                           {{resultData}}
                        </div>
                    </div>
                    <div v-if="res_field">
                        <div class="alert alert-danger" role="alert" >
                           {{resultData}}
                        </div>
                    </div>
                    <p v-if="errors.length" :key="index">
                    <ul>
                        <li class="alert alert-danger" v-for="error in errors" :key="error.id" style="list-style-type: none">{{ error }}</li>
                    </ul>

                    </p>

                </div>
                <div class="col-md-4 col-sm-4 col-lg-4 "></div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-4 col-md-4 "></div>
                <div class="col-lg-4 col-sm-4 col-md-4 bg-light" style="height: 30em">

                     <form @submit.prevent="onSubmit"  @submit="checkForm" novalidate="true"  class="form" dir="rtl" style="height: 350px;" action="" method="">

                        <small class="text-muted   ml-5" style="font-size: small">باعضویت در سیستم علاقه مندی
                            ها،جستجوها،قیمت
                            خانه و...را ذخیره کنید
                        </small>


                           <input v-model="name"  name="name" id="name" type="text" class="form-control"
                                  placeholder="نام کاربری">
                        <input v-model="email"  name="email" id="email" type="email"
                               class="form-control mt-1" placeholder="ایمیل">
                        <input v-model="password" name="password" type="password"
                               class="form-control mt-1" placeholder="رمزعبور">
                        <input v-model="phone" name="phone" id="phone" type="number"
                               class="form-control mt-1" placeholder="موبایل" >
                        <input v-model="address" name="address" id="address" type="text"
                               class="form-control mt-1" placeholder="آدرس">
                        <input v-model="type" name="type" id="type" type="text"
                               class="form-control mt-1" placeholder="نوع کاربر:عادی،ادمین">
                        <!--                <div class="col-sm-4 col-lg-10 col-md-10">-->
                        <!--                    <small class="col-sm-4 col-lg-10 col-md-10 text-muted   ml-5  ">آیا رمز عبور خود را فراموش کرده-->
                        <!--                        اید؟-->
                        <!--                    </small>-->
                        <!--                </div>-->

                        <button class=" col-md-12 btn mt-1" type="submit" id="sin-btn1">عضویت</button>

                        <small class=" col-sm-8 col-lg-8  col-md-8 text-muted" id="in" style="margin-left: 38%">ورود با
                            دیگر حساب ها
                        </small>
                        <br>
                        <div class="row col-md-12 mr-1">

                            <button class="col-md-6 btn mt-1" id="sin-btn2"><i class=" fa fa-facebook"> ورود با حساب
                                فیسبوک</i></button>
                            <button class=" col-md-6 btn mt-1" id="sin-btn3"><i class="fa fa-google"> ورود با حساب
                                گوگل</i>
                            </button>
                        </div>

                        <div class="col-sm-4 col-lg-10 col-md-10">
                            <router-link to="/sign_in">
                                <small class="col-sm-4 col-lg-10 col-md-10 text-muted ml-5 " id="question">حساب کاربری
                                    دارید؟وارد شوید
                                </small>
                            </router-link>
                        </div>


                    </form>

                </div>
                <div class="col-lg-4 col-sm-4 col-md-4  float-right"></div>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
    import axios from "axios"
    import Header from '../../components/shared/Header'
    import Footer from '../../components/shared/Footer'




    export default {
        name: "Sign_up",

        data() {
            return {

               name:null,
                email:null,
                password:null,
                phone:null,
                address:null,
                type:null,
                res_success:false,
                res_field:false,
                resultData:null,
                errors:[],
                result:null,


            }


        },

        methods: {

            checkForm(e) {


                this.errors = [];
                if(!this.name) this.errors.push("وارد کردن نام اجباری است.");

                if(!this.email) {
                    this.errors.push("وارد کردن ایمیل الزامی است.");
                } else if(!this.validEmail(this.email)) {
                    this.errors.push("ایمیل معتبر نیست.");
                }
                if(!this.phone) {
                    this.errors.push("وارد کردن شماره همراه الزامی است.");
                } else if(!this.validPhone(this.phone)) {
                    this.errors.push("شماره همراه معتبر نیست.");
                }

                if(!this.address) this.errors.push("وارد کردن آدرس الزامی است");
                if(!this.type) this.errors.push("وارد کردن نوع کاربری الزامی است.");
                if(!this.errors.length) return true;
                e.preventDefault();
            },
            validEmail:function(email) {
                let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            validPhone:function(phone) {
                let re = /^09[0-9]{9}$/;
                return re.test(phone);
            },
            onSubmit(){
                const formData={
                    name:this.name,
                    email: this.email,
                    password: this.password,
                    phone: this.phone,
                    address: this.address,
                    type: this.type
                }
                console.log(formData)
                axios.post('http://localhost:3000/api/v1/register',formData)
                    .then((res)=>{
                        this.resultData=res.data['data'];
                        this.result=res.data['success'];
                        if (this.result==true){
                           this.res_success=true;
                            this.res_field=false;

                        }
                        else
                        {
                            this.res_success=false;
                            this.res_field=true;

                        }
                    })
                    .catch((err)=>{
                        console.log(err)
                    })
            }
        },
        components: {
            Header: Header,
            Footer: Footer,
        },


    }
</script>

<style scoped>
    @media only screen and (width: 2560px ) {
        .text p {
            margin-left: 9rem;
        }

        .form small {
            margin-left: 15.5rem !important;
        }

        #in {
            margin-left: 22rem !important;
        }

        #question {
            margin-left: 12rem !important;
            margin-bottom: 1rem;
        }

        #forget {
            margin-left: 10.5rem !important;
        }
    }

    @media only screen and (width: 1024px ) {
        .form {
            width: 180%;
            margin-left: -7rem;
        }

        .form small {
            margin-left: 7rem !important;
        }

        #in {
            margin-left: 15rem !important;
        }

        .text {
            width: 8em;
            margin-left: 8rem !important;
        }
    }

    @media only screen and (width: 426px ) {
        .text p {
            margin-left: -1rem;
        }

        img {
            margin-top: 2rem;
        }

        .form {
            margin-right: -.5rem !important;
            margin-left: 0.4rem !important;
        }

        #question {
            margin-left: 8rem !important;
            margin-bottom: 1rem;
        }
    }

    @media only screen and (width: 375px ) {
        .text p {
            margin-left: -2rem;
        }

        img {
            margin-top: 2rem;
        }

        .form {
            margin-right: -.5rem !important;
            margin-left: 0.4rem !important;
        }

        #in {
            margin-left: 8rem !important;
        }

        .form > small {
            margin-left: 2rem !important;
        }

        #question {
            margin-left: 6.5rem !important;
            margin-bottom: 1rem;
        }
    }

    @media only screen and (width: 320px ) {
        .text p {
            margin-left: -3.25rem;
        }

        img {
            margin-top: 2rem;
        }

        .form {
            margin-right: -.5rem !important;
            margin-left: 0.4rem !important;
        }

        #in {
            margin-left: 7rem !important;
        }

        .form > small {
            margin-left: 2rem !important;
            font-size: 11px !important;
        }

        #question {
            margin-left: 4.5rem !important;
            margin-bottom: 1rem;
        }
    }

    @media only screen and (width: 768px ) {
        .form {
            width: 200%;
            margin-left: -7rem;
        }

        .text {
            width: 8em;
            margin-left: 5rem !important;
        }
    }

    #sin-btn3:hover {
        color: #ffffff;
        background-color: #0b4f25; /*#0f8845*/
    }

    #sin-btn2:hover {
        color: #ffffff;
        background-color: #0b4f25; /*#0f8845*/
    }

    #sin-btn1:hover {
        color: #ffffff;
        background-color: #00003b; /*#0f8845*/
    }

    .btn {
        color: #1e3ba5;
        border: 1px solid gray;
        border-radius: 30px;
    }

    small, p {
        font-family: 'IRANSansWeb';
    }

    #sin-btn1, #sin-btn2 {
        font-family: 'IRANSansWeb';
    }

    .btn {
        font-family: 'IRANSansWeb';
    }

</style>