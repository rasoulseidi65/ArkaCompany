<template>
    <div>
        <Header></Header>
        <div class="content" style="margin-top: 8em">
            <div class="row ">
                <div class="col-md-4 col-sm-4 col-lg-4 "></div>
                <div class="col-md-4 col-sm-4 col-lg-4  mt-5 ">
                    <img class="" src="../../assets/img/Arka_logo.png" style="width: 5rem;height: 5rem;margin-left: 40%" alt="">

                </div>
                <div class="col-md-4 col-sm-4 col-lg-4 "></div>
            </div>
            <div class="row ">
                <div class="col-md-4 col-sm-4 col-lg-4 "></div>
                <div class="col-md-4 col-sm-4 col-lg-4 mt-3 ">

                    <div class="text" style="margin-left: 11.5rem">
                        <p style="color: black;font-weight: bold"> ورود   به  حساب   کاربری</p>
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
                </div>
                <div class="col-md-4 col-sm-4 col-lg-4 "></div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-4 col-md-4 "></div>
                <div class="col-lg-4 col-sm-4 col-md-4">

                    <form @submit.prevent="onSubmit" class="bg-light form" dir="rtl" style="height: 350px">
                        <small class="text-muted   ml-5" style="font-size: small">باورود به سیستم علاقه مندی ها،جستجوها،قیمت
                            خانه و...را ذخیره کنید
                        </small>

                        <ValidationProvider rules="required" v-slot="{errors}">
                                <input v-model="email" id="email"  name="email" type="text" class="form-control" placeholder="ایمیل">
                                <span>{{ errors[0] }}</span>
                        </ValidationProvider>
                        <ValidationProvider  rules="required" v-slot="{errors}" >
                                <input v-model="password" name="password" id="password" type="password" class="form-control mt-3" placeholder="رمزعبور">
                                <p>{{ errors[0] }}</p>
                        </ValidationProvider>
                        <div class="col-sm-4 col-lg-10 col-md-10">
                            <small class="col-sm-4 col-lg-10 col-md-10 text-muted   ml-5  " id="forget">آیا رمز عبور خود را فراموش کرده
                                اید؟
                            </small>
                        </div>

                        <button class=" col-md-12 btn mt-3" type="submit" id="login">ورود</button>

                        <small class=" col-sm-8 col-lg-8  col-md-8 text-muted " id="in" style="margin-left: 35%">ورود با دیگر حساب ها
                        </small>
                        <br>
                        <div class="row col-md-12 mr-1">

                            <button class="col-md-6 btn mt-3   " id="sin-btn1"><i class=" fa fa-facebook"> ثبت نام با حساب
                                فیسبوک</i></button>
                            <button class=" col-md-6 btn mt-3 " id="sin-btn2"><i class="fa fa-google"> ثبت نام با حساب گوگل</i>
                            </button>
                        </div>

                        <div class="col-sm-4 col-lg-10 col-md-10 mt-4">
                           <router-link to="/sign_up"> <small class="col-sm-4 col-lg-10 col-md-10 text-muted   ml-5 " id="question">حساب کاربری ندارید؟ثبت نام کنید
                           </small></router-link>
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
   import {ValidationProvider,extend} from 'vee-validate'
    import {email} from 'vee-validate/dist/rules'
    extend('email',{
        ...email,
        message: 'وارد کردن فیلد الزامی است.'

    });



    export default {
        name: "Sign_in",
        data(){
            return{

               email:"",
                password:"",
                res_success:false,
                res_field:false,
                resultData:null,
                value:''


            }

        },
        methods:{
            onSubmit(){
                const formData={
                    email: this.email,
                    password: this.password,
                }
                console.log(formData)
                axios.post('http://localhost:3000/api/v1/login',formData)
                    .then((res)=>{
                        console.log(res.data)
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
           ValidationProvider

        },

    }

</script>

<style scoped>

    @media only screen and (width:2560px ){
        .text p{
            margin-left: 9rem;
        }
        .form  small{
            margin-left: 15.5rem!important;
        }
        #in{
            margin-left: 22rem!important;
        }
        #question{
            margin-left: 12rem!important;
            margin-bottom: 1rem;
        }
        #forget{
            margin-left: 10.5rem!important;
        }
    }
    @media only screen and (width:1024px ){
        .form{
            width: 180%;
            margin-left: -7rem;
        }
        .form  small{
            margin-left: 7rem!important;
        }
        #in{
            margin-left: 15rem!important;
        }
        .text{
            width: 8em;
            margin-left: 8rem!important;
        }
    }
    @media only screen and (width:426px ){
        .text p{
            margin-left: -1rem;
        }
        img{
            margin-top: 2rem;
        }
        .form{
            margin-right: -.5rem!important;
            margin-left: 0.4rem!important;
        }
        #question{
            margin-left: 8rem!important;
            margin-bottom: 1rem;
        }
    }
    @media only screen and (width:375px ){
        .text p{
            margin-left:-2rem;
        }
        img{
            margin-top: 2rem;
        }
        .form{
            margin-right: -.5rem!important;
            margin-left: 0.4rem!important;
        }
        #in{
            margin-left: 8rem!important;
        }
        .form > small{
            margin-left: 2rem!important;
        }
        #question{
            margin-left: 6.5rem!important;
            margin-bottom: 1rem;
        }
    }
    @media only screen and (width:320px ){
        .text p{
            margin-left:-3.25rem;
        }
        img{
            margin-top: 2rem;
        }
        .form{
            margin-right: -.5rem!important;
            margin-left: 0.4rem!important;
        }
        #in{
            margin-left: 7rem!important;
        }
        .form > small{
            margin-left: 2rem!important;
            font-size: 11px!important;
        }
        #question{
            margin-left: 4.5rem!important;
            margin-bottom: 1rem;
        }
    }
    @media only screen and (width:768px ){
        .form{
            width: 200%;
            margin-left: -7rem;
        }
        .text{
            width: 8em;
            margin-left: 5rem!important;
        }
    }
    #sin-btn1:hover{
        color: #ffffff;
        background-color: #0b4f25;/*#0f8845*/
    }
    #login:hover{
        background-color: darkblue;
        color: white;

    }

    #sin-btn2:hover{
        color: #ffffff;
        background-color: #0b4f25;/*#0f8845*/
    }
    #sin-btn1:hover{
        color: #ffffff;
        background-color: #00003b;/*#0f8845*/
    }
    .btn{
        color: #1e3ba5;
        border: 1px solid gray;
        border-radius: 30px;
    }
    small,p{
        font-family: 'IRANSansWeb';
    }
    #sin-btn1,#sin-btn2{
        font-family: 'IRANSansWeb';
    }
    .btn{
        font-family: 'IRANSansWeb';
    }
</style>