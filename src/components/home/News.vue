<template>
    <div class="container mt-3" id="news">
        <div class="row">

            <div class="col-md-6 col-lg-6 col-sm-12">
                <div  class=" title float-right pr-3 mr-2 wow shake"><h6>مقالات روز</h6></div>
                <hr class="" style="background-color: darkblue;width: 20%;height:1px;margin-top: 2.15rem;margin-right: 20px;;">
                <div class="row">
                    <div id="vms"></div>
                    <div class="article-box col-md-9 col-lg-9 col-sm-8"  style="border: 1px solid darkblue;height:311px">
                        <template v-if="selectedTab === require('../../assets/img/13.jpg')" class="row">
                            <div  class=" tab-content__header row header pt-4 "> <h5 class=""  style="font-size: small;margin-left: 5rem">بهره‌وری سرمایه انسانی با کارکنانی عاشق به‌کار تحقق می‌یابد.</h5></div>
                            <small class=" tab-content__header-img text-muted" lang="fa" style="margin-left: 7rem">26 دی 1395</small><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;height: 1.25rem;margin-left:0.5rem">
                            <hr>
                            <p  class=" tab-content__text text-right text-justify text-break pl-2 pr-3 text-muted " style="font-size: small;line-height: 2rem">بهره‌وری سرمایه انسانی با کارکنانی عاشق به‌کار تحقق می‌یابد26 دی 1395از زمانی که مکتب نئوکلاسیک‌ها در بیش از هشت دهه از دل مطالعات هاثورن و شروع نهضت روابط انسانی در سازمان‌ها شکل گرفت‌، نگرش افراد و کارکنانی که یک سازمان را شکل می‌دادند دستخوش تغییرات بنیادین در رویکرد رهبران سازمانی شد و طی بیش از هشت دهه تعریف‌های گوناگونی از منابع انسانی واز منابع انسانی...</p>
                            <button class="tab-content__btn btn " style="font-size: x-small;margin-left: 10rem;background-color: #00003b;position: unset;color: white;margin-top: 4%;"><router-link to="/detailArticle">جزییات بیشتر</router-link> </button>
                        </template>

                        <template v-if="selectedTab === require('../../assets/img/10.jpg')" class=" row a">
                            <div class="tab-content__header row header pt-4 "> <h5 class=""  style="font-size: small;margin-left: 5rem">بهره‌وری سرمایه انسانی با کارکنانی عاشق به‌کار تحقق می‌یابد.</h5></div>
                            <small class=" tab-content__header-img text-muted" lang="fa" style="margin-left: 7rem">26 دی 1395</small><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;margin-left:0.5rem">
                            <hr>
                            <p class="tab-content__text text-right text-justify text-break pl-2 pr-3 text-muted " style="font-size: small;line-height: 2rem">بهره‌وری سرمایه انسانی با کارکنانی عاشق به‌کار تحقق می‌یابد26 دی 1395از زمانی که مکتب نئوکلاسیک‌ها در بیش از هشت دهه از دل مطالعات هاثورن و شروع نهضت روابط انسانی در سازمان‌ها شکل گرفت‌، نگرش افراد و کارکنانی که یک سازمان را شکل می‌دادند دستخوش تغییرات بنیادین در رویکرد رهبران سازمانی شد و طی بیش از هشت دهه تعریف‌های گوناگونی از منابع انسانی واز منابع انسانی  2..</p>
                            <button  class="tab-content__btn  btn " style="font-size: x-small;margin-left: 10rem;background-color: #00003b;position: unset;color: white;margin-top:4%;">جزییات بیشتر</button>
                        </template>

                        <template  v-if="selectedTab ===require('../../assets/img/24.jpg')" class=" row a ">
                            <div class="tab-content__header row header pt-4 "> <h5 class=""  style="font-size: small;margin-left: 5rem">بهره‌وری سرمایه انسانی با کارکنانی عاشق به‌کار تحقق می‌یابد.</h5></div>
                            <small class="tab-content__header-img text-muted" lang="fa" style="margin-left: 7rem">26 دی 1395</small><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;margin-left:0.5rem">
                            <hr>
                            <p class="tab-content__text text-right text-justify text-break pl-2 pr-3 text-muted " style="font-size: small;line-height: 2rem">بهره‌وری سرمایه انسانی با کارکنانی عاشق به‌کار تحقق می‌یابد26 دی 1395از زمانی که مکتب نئوکلاسیک‌ها در بیش از هشت دهه از دل مطالعات هاثورن و شروع نهضت روابط انسانی در سازمان‌ها شکل گرفت‌، نگرش افراد و کارکنانی که یک سازمان را شکل می‌دادند دستخوش تغییرات بنیادین در رویکرد رهبران سازمانی شد و طی بیش از هشت دهه تعریف‌های گوناگونی از منابع انسانی واز منابع انسانی ‌3..</p>
                            <button  class="tab-content__btn btn " style="font-size: x-small;margin-left: 10rem;background-color: #00003b;position: unset;color: white;margin-top:4%;">جزییات بیشتر</button>
                        </template>

                        <template v-if="selectedTab ===require('../../assets/img/16.jpg')" class=" row a">
                            <div class="tab-content__header row header pt-4 "> <h5 class=""  style="font-size: small;margin-left: 5rem">بهره‌وری سرمایه انسانی با کارکنانی عاشق به‌کار تحقق می‌یابد.</h5></div>
                            <small class="tab-content__header-img text-muted" lang="fa" style="margin-left: 7rem">26 دی 1395</small><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;margin-left:0.5rem">
                            <hr>
                            <p class="tab-content__text text-right text-justify text-break pl-2 pr-3 text-muted  " style="font-size: small;line-height: 2rem">بهره‌وری سرمایه انسانی با کارکنانی عاشق به‌کار تحقق می‌یابد26 دی 1395از زمانی که مکتب نئوکلاسیک‌ها در بیش از هشت دهه از دل مطالعات هاثورن و شروع نهضت روابط انسانی در سازمان‌ها شکل گرفت‌، نگرش افراد و کارکنانی که یک سازمان را شکل می‌دادند دستخوش تغییرات بنیادین در رویکرد رهبران سازمانی شد و طی بیش از هشت دهه تعریف‌های گوناگونی از منابع انسانی واز منابع انسانی ..4.</p>
                            <button  class="tab-content__btn  btn " style="font-size: x-small;margin-left: 10rem;background-color: #00003b;position: unset;color: white;margin-top: 4%;">جزییات بیشتر</button>
                        </template>



                    </div>

                    <div class="article col-md-1 col-lg-1 col-sm-4 ml-3 mb-3   float-right" >
                        <div  v-for="(tab,index) in tabs" :key="index" @click="selectedTab = tab.url" :class="{ active : selectedTab === tab.url }" class="tab-item hvr-outline-out mt-2" style="width:65px;height:65px;border-radius:100%;">
                            <img class="tab-item__heading-img" :src="tab.url"   alt="" style="width:65px;height:65px;border-radius:100%;" ></div>
                        <!--                <label class="mt-2 hvr-outline-out" @click="isShowing1 ^= true" style="width:65px;height:65px;border-radius:100%;"><img  :src=tab.url alt=""  style="width:65px;height:65px;border-radius:100%;"></label>-->
                        <!--                <label  class="row   mt-3 ml-1 hvr-outline-out" @click="isShowing2 ^= true" style="width:65px;height:65px;border-radius:100%;"><img :src=tab.url  alt=""  style="width:65px;height:65px;border-radius:100%;"></label>-->
                        <!--                <label  class="row   mt-3 ml-1 hvr-outline-out"   @click="isShowing3 ^= true"  style="width:65px;height:65px;border-radius:100%;"><img :src=tab.url  alt=""  style="width:65px;height:65px;border-radius:100%;"></label>-->
                        <!--            </div>-->
                    </div>
                </div>
            </div>

            <div class="col-md-6 col-lg-6 col-sm-12 ">
                <div  class=" title float-right pr-3 mr-2 wow shake "><h6>اخبار روز</h6></div>
                <hr  style="background-color: darkblue;width: 20%;height:1px;margin-top: 2.15rem;margin-right: 20px;margin-bottom: 1px;"><br>
                <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-interval="10000">
                            <div class="row each_news" >
                                <div class="card mb-1 last_news_box bg-light" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h6 class="card-title text-right mt-2" style="font-size: small">مایکروسافت اینترنت اکسپلورر را نابود میکند!</h6>
                                                <p class="card-text text-right text-justify text-muted" style="font-size: small" >اگرچه تقریبا همه کاربران ویندوز ، اولین بار با مروگر اینترنت اکسپلورر وارد دنیای وب شدن اما ...</p>
                                                <p class="card-text  text-right "><small class="text-muted"> <span lang="fa">12 اسفند1397 </span><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;"></small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 last_news_img">
                                            <img src="../../assets/img/13.jpg" class="card-img pt-4 pr-4" alt="">
                                            <div class="overlay"></div>
                                            <div class="button"><router-link to="./detailNews" style="font-size: small"> جزییات خبر</router-link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="card mb-1 bg-light" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title text-right mt-2" style="font-size: small">گجت های پوشیدنی برای نجات جان سربازان</h5>
                                                <p class="card-text text-right text-justify text-muted" style="font-size: small">به زودی با گجتهای پوشیدنی زندگی مون شبیه فیلم های علمی تخیلی میشه و حتی شاید مدرن تر از فیلم های علمی تخیلی ! اگرچه</p>
                                                <p class="card-text text-right"><small class="text-muted "><span lang="fa">07 اسفند1397 </span><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;"></small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 last_news_img">
                                            <img src="../../assets/img/11.jpg" class="card-img pt-4 pr-4" alt="">
                                            <div class="overlay"></div>
                                            <div class="button"><router-link to="./detailNews" style="font-size: small"> جزییات خبر</router-link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-interval="2000">
                            <div class="row each_news" >
                                <div class="card mb-1 last_news_box bg-light" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h6 class="card-title text-right mt-2" style="font-size: small">مایکروسافت اینترنت اکسپلورر را نابود میکند!</h6>
                                                <p class="card-text text-right text-justify text-muted" style="font-size: small" >اگرچه تقریبا همه کاربران ویندوز ، اولین بار با مروگر اینترنت اکسپلورر وارد دنیای وب شدن اما ...</p>
                                                <p class="card-text  text-right "><small class="text-muted"> <span lang="fa">12 اسفند1397 </span><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;"></small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 last_news_img">
                                            <img src="../../assets/img/13.jpg" class="card-img pt-4 pr-4" alt="">
                                            <div class="overlay"></div>
                                            <div class="button"><router-link to="./detailNews" style="font-size: small"> جزییات خبر</router-link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="card mb-1 bg-light" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title text-right mt-2" style="font-size: small">گجت های پوشیدنی برای نجات جان سربازان</h5>
                                                <p class="card-text text-right text-justify text-muted" style="font-size: small">به زودی با گجتهای پوشیدنی زندگی مون شبیه فیلم های علمی تخیلی میشه و حتی شاید مدرن تر از فیلم های علمی تخیلی ! اگرچه</p>
                                                <p class="card-text text-right"><small class="text-muted "><span lang="fa">07 اسفند1397 </span><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;"></small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 last_news_img">
                                            <img src="../../assets/img/11.jpg" class="card-img pt-4 pr-4" alt="">
                                            <div class="overlay"></div>
                                            <div class="button"><router-link to="./detailNews" style="font-size: small"> جزییات خبر</router-link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row each_news" >
                                <div class="card mb-1 last_news_box bg-light" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h6 class="card-title text-right mt-2" style="font-size: small;">مایکروسافت اینترنت اکسپلورر را نابود میکند!</h6>
                                                <p class="card-text text-right text-justify text-muted" style="font-size: small" >اگرچه تقریبا همه کاربران ویندوز ، اولین بار با مروگر اینترنت اکسپلورر وارد دنیای وب شدن اما ...</p>
                                                <p class="card-text  text-right "><small class="text-muted"> <span lang="fa">12 اسفند1397 </span><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;"></small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 last_news_img">
                                            <img src="../../assets/img/13.jpg" class="card-img pt-4 pr-4" alt="" id="N" >
                                            <div class="overlay"></div>
                                            <div class="button"><router-link to="./detailNews" style="font-size: small"> جزییات خبر</router-link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="card l mb-1 bg-light" style="max-width: 540px;">
                                    <div class="row no-gutters">
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title text-right mt-2" style="font-size: small">گجت های پوشیدنی برای نجات جان سربازان</h5>
                                                <p class="card-text text-right text-justify text-muted" style=";font-size: small">به زودی با گجتهای پوشیدنی زندگی مون شبیه فیلم های علمی تخیلی میشه و حتی شاید مدرن تر از فیلم های علمی تخیلی ! اگرچه</p>
                                                <p class="card-text text-right"><small class="text-muted "><span lang="fa">07 اسفند1397 </span><img src="../../assets/img/15.png" alt="" style="width: 1.25rem;"></small></p>
                                            </div>
                                        </div>
                                        <div class="col-md-4 last_news_img ">
                                            <img src="../../assets/img/11.jpg" class="card-img pt-4 pr-4" alt="">
                                            <div class="overlay"></div>
                                            <div class="button"><router-link to="./detailNews" style="font-size: small"> جزییات خبر</router-link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true" style="background-color: darkblue;border-radius: 30px;width: 1em"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true" style="background-color: darkblue;border-radius: 30px;width: 1em"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "News",
        data() {
            return{
                tabs: [
                    {
                        id:1,
                        url:require('../../assets/img/13.jpg'),

                    },
                    {
                        id:2,
                        url:require('../../assets/img/10.jpg'),

                    },
                    {
                        id:3,
                        url:require('../../assets/img/24.jpg'),

                    },
                    {
                        id:4,
                        url:require('../../assets/img/16.jpg'),

                    }
                ],
                selectedTab: require('../../assets/img/13.jpg')
            }

        },
        methods: {
            selectTab() {
                this.selectedTab = this.tab.url;
            }
        }
        }
</script>

<style scoped>
    p{
       font-family: 'IRANSansWeb';
    }
    h5{
        font-family: 'IRANSansWeb';
    }
    h6{
        font-family: 'IRANSansWeb';
    }
    small{
        font-family: 'IRANSansWeb';
    }

    @media only screen and (width: 1024px) {
        #vms {
            display: none;
        }

        button {
            margin-top: 0.95% !important;
            margin-left: 9rem !important;

        }

        .carousel-control-prev-icon {
            margin-top: -1.5rem;
        }

        .carousel-control-next-icon {
            margin-top: -1.5rem;
        }
    }
    @media only screen and (width: 768px){
        .article{
            margin-left:0.15rem!important;
            padding-top: 2em!important;
        }
        .article-box{
            height:375px!important;
        }
        button{
            margin-top: -9%!important;
            margin-left: 6rem!important;
        }
        .article-box h5{
            font-size: 10px!important;
           margin-left: 2.5rem!important;
            font-weight: bold;
        }
        .carousel-control-prev-icon {
            margin-top: .5rem;
        }

        .carousel-control-next-icon {
            margin-top: .5rem;
        }

    }
    @media screen and (max-width:426px){
        .article{
            display: none;
        }
        #vms{
            display: none;
        }
        .last_news_img > img{
            display: none;
        }
        .card-img{
            display: none;
        }
        .overlay{
            height: unset!important;
        }
        .last_news_img .button{
            display: contents!important;

        }
        .button a{
            margin-left: 4rem;
            width: 70%!important;

        }
       button{
            margin-top:8%;
        }
        .title{
           margin-top: 4rem;
            margin-right:-5rem!important;
        }
      hr{
           margin-right: -4rem!important;
          margin-top: 6rem!important;
        }
        .carousel{
            margin-top: 1.5rem;
            width: 27rem;
            margin-left: 1.70rem;

        }
        .article-box{
            left: 2.6rem;
            margin-top: 1rem;
        }
        .article-box .text-right{
            margin-top: -5rem;
        }




    }
    @media only screen and (width: 320px){
        .title{
            margin-top: 4rem;
            margin-right: -7rem!important;
        }
        hr{
            margin-top: 5.5rem!important;
            margin-right: -6rem!important;
        }
        .article-box{
            margin-top: -0.5rem;
        }
        .article-box .text-right{
            margin-top: -5rem;
        }
        .article-box .header >h5{
            font-size: 12px!important;
            margin-left: 3rem!important;
        }
        button{
            margin-top: -1rem!important;
            margin-left: 8rem!important;
        }
        .carousel{
            right: 2.2rem!important;
        }
    }
    @media  screen and(max-width: 376px) {
        button{

       }
    }

    .a{
        display: block;

    }






    #vms {
        width: 0;
        height: 0;
        border-left: 12px solid #00003b;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        transform: translate(27.45rem,1rem);

    }

    .btn{
        color: #1e3ba5;
        border: 1px solid gray;
        border-radius: 30px;
    }



    /* Outline Out:hover */
    .hvr-outline-out {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 59, 0);

        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
    }
    .hvr-outline-out:before {
        content: '';
        position: absolute;
        border: #00003b solid 4px;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-property: top, right, bottom, left;
        transition-property: top, right, bottom, left;
        border-radius: 50%;
    }
    .hvr-outline-out:hover:before, .hvr-outline-out:focus:before, .hvr-outline-out:active:before {
        top: -8px;
        right: -8px;
        bottom: -8px;
        left: -8px;
        border-radius: 50%;
    }
    .card-img{
        /*position: relative;*/
        /*margin-top: 50px;*/
        /*width: 500px;*/
        /*height: 300px;*/
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0);
        transition: background 0.5s ease;
    }

    .card-img:hover .overlay {
        display: block;
        background: rgba(0, 0, 0, .3);
    }

    /*img {*/
    /*    position: absolute;*/
    /*    width: 500px;*/
    /*    height: 300px;*/
    /*    left: 0;*/
    /*}*/


    .button {
        position: absolute;
        width: 100%;
        left:40px;
        top: 60px;
        text-align: center;
        opacity: 0;

        transition: opacity .35s ease;
    }

    .button a {
        width: 80px;
        padding: 2px 2px;
        text-align: center;
        color: #ffffff;
        border: solid 1px #ffffff;
        background-color: rgba(0, 2, 59, 0.19);
        border-radius: 30px;
        z-index: 1;
        text-decoration: none;
    }

    .container:hover .button {
        opacity: 1;
    }

</style>