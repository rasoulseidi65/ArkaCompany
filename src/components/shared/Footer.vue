<template>
    <div class="content mt-5 float-left"  >
        <br>
        <div class="row foot" style="background-color: #00003b;background-position: center center;">
            <div class=" col-sm-12 col-md-6 col-lg-3">
                <h6 class="text-right text-center" id="h6">درباره آرکا</h6>
                <hr  style="background-color:white;height: 0.1px">
                <p class="text-right justify-text pl-2 pr-4" id="p2">
                    شرکت آرکا در سال1395 در زمینه هوش مصنوعی و تولید نرم افزار آغاز به کار نمود.این شرکت با بهره گیری از آخرین یافته های علمی تلاش دارد تا به عنوان یک واحد دانش بنیان نقش مثبتی را در زمینه های ذکر شده ایفا نماید.

                </p>
                <div class="row ml-4" >
                    <input dir="rtl" id="search-input" type="text" placeholder="   ایمیل">
                    <button id="search-button" type="submit">
                        <i class="fa fa-arrow-right"></i></button>
                </div>

                <h6 class="text-right mr-5" id="follow">اشتراک گذاری</h6>

                <div class="row mr-5 float-right ">
                    <router-link to=""><i class="fa fa-facebook-f fa-x  " id="facebook"></i></router-link>
                    <router-link to=""><i class="fa fa-twitter fa-x ml-1 " id="twitter"></i></router-link>
                   <router-link to=""> <i class="fa fa-linkedin fa-x ml-1 " id="linkedin"></i></router-link>
                    <router-link to=""><i class="fa fa-yahoo fa-x ml-1 " id="yahoo"></i></router-link>
                   <router-link to=""> <i class="fa fa-google-plus fa-x ml-1 " id="google"></i></router-link>
                </div>
            </div>

            <div class=" col-sm-12 col-md-6 col-lg-3" >

                <h6 class="mt-5 text-center"  style="color: white;">تماس با ما</h6>
                <hr  style="background-color:white;height: 0.1px">
                <ul class="text-right justify-content-right float-right" style="list-style-type: none;color: white;" dir="rtl">
                    <li>
                        <div class="row" lang="fa" >
                              <div class="col-1"><i class="fa fa-envelope"></i></div>
                              <div class="col-10">
                                  <p> arka@gmail.com .</p>
                              </div>
                        </div>
                     </li>
                    <li>
                        <div class="row">
                            <div class="col-1"><i class="fa fa-mobile"></i></div>
                            <div class="col-10">
                                <p>09121111111 </p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-1"><i class="fa fa-phone"></i></div>
                            <div class="col-10">
                                <p>021-25489632</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-1"><i class="fa fa-map-marker"></i></div>
                            <div class="col-10">
                                <p>خرم اباد-دانشگاه لرستان-پارک علم و فناوری</p>
                            </div>
                        </div>
                    </li>
                    <br/>
                </ul>

            </div>

            <div class="col-sm-12 col-md-6 col-lg-3">

                <h6 class="pt-5 mb-2 text-center" style="color: white; ">نمونه کارها</h6>
                <hr class=""  style="background-color:white;height: 0.1px;margin-top: 1.2em">
                <div class="row float-right">
                    <div class="col-sm-6 col-md-4  ">
                    <img class="image1 mb-3  " src="../../assets/img/13.jpg" alt="">
                    </div>

                   <div class="col-sm-6 col-md-4">
                       <img class="image1 mb-3 " src="../../assets/img/13.jpg" alt="" >
                   </div>

                   <div class="col-sm-6 col-md-4 ">
                       <img class="image1 mb-3  " src="../../assets/img/2.jpg" alt="">
                   </div>

                  <div class="col-sm-6 col-md-4">
                      <img class="image1  " src="../../assets/img/16.jpg" alt="">
                  </div>

                <div class="col-sm-6 col-md-4">
                    <img class="image1 " src="../../assets/img/19.jpg" alt="">
                </div>

                    <div class="col-sm-6 col-md-4">
                        <img class="image1 " src="../../assets/img/2.jpg" alt="">
                    </div>
                </div>
            </div>

            <div class=" col-sm-12 col-md-6 col-lg-3"  >
                <h6 class="mt-5 text-center" style="color: white;">لینک های اصلی </h6>
                <hr  style="background-color:white;height: 0.1px">
                <ul class="link float-right mr-5" style="list-style-type: none;color: white;">
                    <li>
                        <div class="row">
                                <div class="col-9">
                             <router-link to=""><p> صفحه اصلی</p></router-link>
                                </div>
                            <div class="col-1 "><i class="fa fa-angle-left"></i></div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-9">
                                <router-link to=""><p> محصولات</p></router-link>
                            </div>
                            <div class="col-1 "><i class="fa fa-angle-left"></i></div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-9">
                                <router-link to=""><p>خدمات</p></router-link>
                            </div>
                            <div class="col-1 "><i class="fa fa-angle-left"></i></div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-9">
                                <router-link to=""><p>نمونه کارها</p></router-link>
                            </div>
                            <div class="col-1 "><i class="fa fa-angle-left"></i></div>
                        </div>
                    </li>
                    <li>
                        <div class="row">
                            <div class="col-9">
                                <router-link to=""><p> تیم کاری</p></router-link>
                            </div>
                            <div class="col-1 "><i class="fa fa-angle-left"></i></div>
                        </div>
                    </li>
<!--                    <li>-->
<!--                        <div class="row">-->
<!--                            <div class="col-9">-->
<!--                                <router-link to=""><p>اخبار و رویدادها</p></router-link>-->
<!--                            </div>-->
<!--                            <div class="col-1 "><i class="fa fa-angle-left"></i></div>-->
<!--                        </div>-->
<!--                    </li>-->
<!--                    <li>-->
<!--                        <div class="row">-->
<!--                            <div class="col-9">-->
<!--                                <router-link to=""><p>درباره شرکت</p></router-link>-->
<!--                            </div>-->
<!--                            <div class="col-1 "><i class="fa fa-angle-left"></i></div>-->
<!--                        </div>-->
<!--                    </li>-->
                    <li>
                        <div class="row">
                            <div class="col-9">
                                <router-link to="/sign_up"><p>عضویت</p></router-link>
                            </div>
                            <div class="col-1 "><i class="fa fa-angle-left"></i></div>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
        <div class="row copy" style="background-color: #00003b">
            <div class="col copyright">
                <p class="text-center"><small class="text-white-50 ">تمامی حقوق این سایت مربوط به شرکت آرکا میباشد.</small></p>
            </div>
        </div>

    </div>


</template>

<script>

    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
    @media  screen and (width:430px){
        .foot{
            margin-left: 0;
            margin-right: -10.5rem;
            overflow-x: hidden;
        }
        .copy{
            margin-left: 0;
            margin-right: -10.5rem;
            overflow-x: hidden;
        }
    }


    html{
        overflow-x: hidden;
        overflow-y: auto;
    }
    a{
        color: white!important;
        display: block!important;

    }
    a:hover{
        color: #003264!important;
        text-decoration: none!important;/*unset underline*/

    }
    #footer{
        color:white;
        background-color: rgba(0, 0, 59, 0.96);
        width:100%;
        height: 20%;

    }

    .copyright p{
        border-top:1px solid rgba(255,255,255,.1);
    }

    .image1 {

        background-size: cover;
        background-position: center center;
    }
    #search-input{
        width:80%;
        overflow: hidden;
        margin-left:2%;
        height:2em;
    }
    #h6{
        padding-top:3em;
        color: white;
    }
    #follow{
        padding-top: 30px;
        color: white;
    }
    #facebook{
        border-radius: 50%;
        border: 1px solid white;
        padding: 12px;
        display: inline-block;
        /*width: 35%;*/
        text-align: center;
        color: white;
    }
    #twitter{
        border: 1px solid white;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
        color: white;
        padding: 12px;
    }
    #linkedin{
        border: 1px solid white;
        padding: 12px;
        display: inline-block;
        text-align: center;
        border-radius: 50%;
        color: white;
    }
    #yahoo{
        border: 1px solid white;
        padding: 12px;

        display: inline-block;
        text-align: center;
        color: white;  border-radius: 50%;
    }
    #google{
        border: 1px solid white;
        padding: 11px;
        display: inline-block;
        text-align: center;
        color: white;  border-radius: 50%;
    }
    #search-button{
        font-size:70%;
        /*font-family: 'Yekan';*/
        background-color: #007bff;
        margin-left: -10px;
        color: white;
        width:10%;
        height:auto;
    }
    #p2{
        color: white;
        font-size: small
    }
    .image {
        display: block;
        width: 70px;
        height: 60px;
    }
    h6,p,small{
        font-family: 'IRANSansWeb';
    }

</style>