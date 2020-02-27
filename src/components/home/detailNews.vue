<template>
    <div>
        <Header></Header>
        <div class="container mb-5">
            <aside class="right col-lg-3 col-md-5 bg-light" style="margin-top: 13em;margin-right: -3em">

                <div class="recent_news">
                    <div class="head_title_1">
                        <h6>جدید‌ ترین اخبار</h6>
                        <div class="right_side_divider">
                               <span class="squere1">
                                    <span class="squere2"></span>
                               </span>
                        </div>
                    </div>
                    <div class="box_style4">
                        <ul style="list-style-type: none">

                            <li class="recent_news_item">
                                <div class="recent_news_box">
                                    <div class="aside_news"><a href="#" title="مایکروسافت اینترنت اکسپلورر را نابود میکند!" class="ellipsis" style="overflow-wrap: break-word;"><i class="fa fa-bullhorn arrow_left"></i>مایکروسافت اینترنت اکسپلورر را نابود میکند!</a></div>
                                    <div class="aside_date"><span>12 اسفند</span></div>
                                </div>
                            </li>

                            <li class="recent_news_item">
                                <div class="recent_news_box">
                                    <div class="aside_news"><a href="مایکروسافت اینترنت اکسپلورر را نابود میکند!" title="مایکروسافت اینترنت اکسپلورر را نابود میکند!" class="ellipsis" style="overflow-wrap: break-word;"><i class="fa fa-bullhorn arrow_left"></i>مایکروسافت اینترنت اکسپلورر را نابود میکند!</a></div>
                                    <div class="aside_date"><span>27 بهمن</span></div>
                                </div>
                            </li>

                            <li class="recent_news_item">
                                <div class="recent_news_box">
                                    <div class="aside_news"><a href="مایکروسافت اینترنت اکسپلورر را نابود میکند!" title="مایکروسافت اینترنت اکسپلورر را نابود میکند!" class="ellipsis is-truncated" style="overflow-wrap: break-word;"><i class="fa fa-bullhorn arrow_left" style="display: inline;"></i>مایکروسافت اینترنت اکسپلورر را نابود میکند!... </a></div>
                                    <div class="aside_date"><span>11 دی</span></div>
                                </div>
                            </li>

                            <li class="recent_news_item">
                                <div class="recent_news_box">
                                    <div class="aside_news"><a href="مایکروسافت اینترنت اکسپلورر را نابود میکند!/" title="مایکروسافت اینترنت اکسپلورر را نابود میکند!" class="ellipsis is-truncated" style="overflow-wrap: break-word;"><i class="fa fa-bullhorn arrow_left" style="display: inline;"></i>مایکروسافت اینترنت اکسپلورر را نابود میکند!... </a></div>
                                    <div class="aside_date"><span>08 دی</span></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </aside>
            <aside class="left col-lg-9 col-md-7 bg-light" style="margin-top: 13em">
                <div class=" detail_part1 ml-1" style="margin-top: 5rem;">
                    <div class=" col-md-2 col-sm-4 news_title float-right mr-4" >
                        <span class="">خبر روز</span>
                    </div>

                    <div class=" list_style2 row mt-4"  style="">
                        <ul style="list-style-type: none" >
                            <li class="each_item ls1055"><span class=" mr-5 icon_1 bg1" ></span>1397/12/07</li>
                            <li class="each_item ls105"><span class=" mr-5 icon_1 bg2" ></span>954</li>
                            <li class="each_item ls10"><a class="" href="javascript:if(window.print)window.print()" title=""><span class=" mr-5 icon_1 bg3" ></span>نسخه چاپی</a></li>
                        </ul>
                    </div>
                    <h1 class="col-sm-12 col-md-12">مایکروسافت اینترنت اکسپلورر را نابود میکند!</h1>
                    <article>
                        <div class="detail_part2 mt-5">
                            <div class="squere_bg1">
                                <a href="news" title="">بازگشت</a>
                            </div>
                            <div class="squere_bg2"></div>
                            <div class="squere_bg3"></div>
                        </div>
                    </article>
                    <div class="detail_part3">
                        <article class="content_style1">
                            <p>گرچهقریبا همه کاربران ویندوز ، اولین بار با مروگر اینترنت اکسپلورر وارد دنیای وب شدن اما  تقریبا همه کاربران ویندوز ، اولین بار با مروگر اینترنت اکسپلورر وارد دنیای وب شدن اما ..</p></article>

                    </div>


                </div>
            </aside>

        </div>
        <Footer></Footer>
    </div>


</template>

<script>
    import Header from '../../components/shared/Header'
    import Footer from '../../components/shared/Footer'
    export default {
        name: "detailNews",
        components: {
        Header: Header,
            Footer: Footer,
    },
    }
</script>

<style scoped>
    p{
        font-family: 'IRANSansWeb';
    }
    @media only screen and(width:320px) {
         .left{
            width: 130%!important;
            left: 0!important;
        }

    }
    html{
        font-size: 9px;
        font-family: 'IRANSansWeb';
    }
    .bg1{
        background-image:url("../../assets/img/calendar.png");

    }
    .bg2{
        background-image:url("../../assets/img/eye.png");
    }
    .bg3{
        background-image:url("../../assets/img/print.png");
    }
    @media screen and (max-width: 430px) {
        .right{
            display: none;
        }
        .left{
            left: 1.3rem;
            width: 120%!important;
            overflow-x: hidden;
        }
        .left .detail_part2 {
             right: -12rem;

        }
        .left .detail_part2:before{
           width: 25%!important;
        }
        .left .detail_part2 .squere_bg2{
            display: none;
        }
        .left .detail_part2 .squere_bg3:before{
            width: 25%;
        }
        .left .content_style1{
            display: inline-block;
            margin-right: 4rem!important;
            line-break:normal!important;
            margin-left: 3rem!important;
        }
        .left .detail_part1 >h1{
            font-size: 8px!important;
            margin-top: -6rem;
            margin-right: -8rem;
            font-weight: bold;
        }
        .left .list_style2{
            right: -16em;
            top: -2em;
        }
        .left .list_style2  .ls1055{
            padding-left: 8.5em;
        }
        .left .list_style2 .ls10{
            margin-left: -1em;
        }
        a{
            color: black!important;
        }

    }
    @media only screen and (width: 768px) {
        .news_title {
            display: none;
        }

       .left .detail_part1 > h1 {
            right: 3em;
           font-size: 9px;
           top: -13em;
           font-weight: bold;

        }
       .left .list_style2{
            right: -16em;
           top: -2em;
        }
       .left .list_style2  .ls1055{
            padding-left: 8.5em;
       }
        .left .list_style2 .ls10{
            margin-left: -1em;
        }
        .left .detail_part3  .content_style1{
           font-size: 10px;
            word-break: break-word;
            white-space: pre;

        }
        .left .detail_part2{
            background-size:unset;
           background-image: url("../../assets/img/22.jpg");
        }
    }

    @media only screen and (max-width: 992px){
    html {
        font-size:9.5px;
    }
    }
    @media only screen and (max-width: 570px){
        .detail_part2 .squere_bg1 {
            display: none;
        }
        .news_title{
            display: none;
        }
        .detail_part1 > h1{
            right: 7em;
        }

        .bg1{
            padding-right: -10em!important;
        }
        .bg2{
            padding-right: 5em;
        }
        .bg3{
            padding-right: 6em;
        }
        .detail_part2{
          background-size:cover;
            right: -10em;
        }
        .content_style1 >p{
            font-size: 10px;}


    }

    .right .recent_news {
        width: 100%;
        float: right;
        /*background-color: #fffffe;*/
        -webkit-box-shadow: 0 0 5px #ddd;
        box-shadow: 0 0 5px rgba(0, 0, 59, 0.17);
        margin-bottom: 35px;
        padding: 25px 25px 0;
        position: relative;
    }
    .head_title_1 {
        text-align: center;
        direction: rtl;
        width: 100%;
        float: right;
        padding: 5px;
        position: relative;
    }
    .head_title_1 > h2 {
        font-size: 1.2rem;
        font-family: 'IRANSansWeb';
        line-height: 24px;
        color: #4e6e7a;
        margin-bottom: 10px;
    }
    .head_title_1 .right_side_divider {
        position: relative;
        width: 100%;
        float: right;
    }
    .head_title_1 .right_side_divider:before {
        background-color: #00003b;
        content: "";
        height: 1px;
        position: absolute;
        right: 5px;
        top: 6px;
        width: 80px;
    }

    .head_title_1 .right_side_divider:after {
        background-color: #000073;
        content: "";
        height: 1px;
        left: 5px;
        position: absolute;
        top: 6px;
        width: 80px;
    }
    .head_title_1 .right_side_divider .squere1 {
        width: 13px;
        height: 13px;
        position: absolute;
        margin: 0 auto;
        left: 0;
        right: 0;
        background-color: #00003b;
        transform: rotate(45deg);
    }
    .right_side_divider .squere1 .squere2 {
        background-color: #fff;
        height: 7px;
        left: 0;
        margin: 0 auto;
        position: absolute;
        right: 0;
        top: 3px;
        width: 7px;
    }
    .right .recent_news .box_style4 {
        float: right;
        width: 100%;
        margin: 25px 0;
    }
    .right .recent_news .box_style4 .recent_news_item {
        width: 100%;
        float: right;
        padding: 10px 0;
    }
    .box_style4 .recent_news_item .recent_news_box {
        width: 100%;
        float: right;

    }
    .recent_news_item .recent_news_box .aside_news {
        width: 100%;
        float: right;
        margin-bottom: 7px;

       
    }
    .recent_news_item .recent_news_box .aside_news > a {
        color: #777;
        display: inline-block;
        float: right;
        font-size: 0.6rem;
        font-family: 'IRANSansWeb';
        height: 28px;
        line-height: 20px;
        overflow: hidden;
        padding: 1px 15px 1px 5px;
        width: 100%;

    }
    .recent_news_item .recent_news_box .aside_date {
        float: left;
        width: 42%;
        text-align: center;
        position: relative;
        border: dotted 1px #00003b;
        transform: skew(-20deg);
    }
    .recent_news_item .recent_news_box .aside_date:before {
        content: "";
        height: 1px;
        left: 100%;
        position: absolute;
        top: 9px;
        width: 153px;
        border-bottom: dotted 1px #00003b;
    }
    .recent_news_box .aside_date > span {
        text-align: center;
        font-size: 0.8rem;
        font-family: 'IRANSansWeb';
        line-height: 20px;
        color: #00003b;
        width: 100%;
        float: left;
        transform: skew(20deg);
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        font-family: 'IRANSansWeb';
        margin-inline-start: 0;
        margin-inline-end: 0;
    }
    .content_style1 {
        font-size: 1.1rem;
        font-family: 'IRANSansWeb';
        line-height: 32px;
        text-align: justify;
        color: #777;
        margin-top: 10px;
        width: 90%;
        padding-right: 3em;
        padding-left: -4em;
    }
    .left  .detail_part3 {
        float: right;
        padding: 25px;
        width: 70em;
        position: relative;
        z-index: 1;
        left: 30em;
    }
    .left .detail_part2 {
        background: none no-repeat center center / cover;

        height: 460px;
        position: relative;
        text-align: center;
        width:55em;
        display: block;
        background-image: url('../../assets/img/2.jpg');
        left: 22em;
    }
    .left  .detail_part2:before {
        content: "";
        position: absolute;
        top: 11px;
        right: 0;
        background-color: #fff;
        height: 1px;
        width: 43%;
        transition: all .4s linear;
    }

    .left .detail_part2:after {
        content: "";
        position: absolute;
        top: 11px;
        left: 0;
        background-color: #fff;
        height: 1px;
        width: 43%;
        transition: all .4s linear;
    }

     .detail_part2 .squere_bg1 {
        background-color: #f9f5f7;
        height: 70px;
        margin: 0 auto;
        position: absolute;
        right: 0;
        top: -35px;
        left: 0;
        width: 70px;
        transform: rotate(45deg);
    }
   .detail_part2 .squere_bg1 > a {
        color: #fff;
        display: inline-block;
        font-size: 0.9rem;
       font-family: 'IRANSansWeb';
        height: 50px;
        line-height: 22px;
        margin: 0 auto;
        padding: 13px 0;
        position: absolute;
        right: 0;
        top: 9px;
        left: 0;
        text-align: center;
        width: 50px;
        z-index: 2;
        transform: rotate(-45deg);
       text-decoration: none;
    }
     .detail_part2 .squere_bg1:before {
        background-color: #00003b;
        content: "";
        height: 50px;
        margin: 0 auto;
        position: absolute;
        right: 0;
        top: 9px;
        left: 0;
        width: 50px;
    }
    .left  .detail_part2:before {
        content: "";
        position: absolute;
        top: 11px;
        right: 0;
        background-color: #fff;
        height: 1px;
        width: 43%;
        transition: all .4s linear;
    }
    .left .detail_part2:after {
        content: "";
        position: absolute;
        top: 11px;
        left: 0;
        background-color: #fff;
        height: 1px;
        width: 43%;
        transition: all .4s linear;
    }
     .detail_part2 .squere_bg2 {
        background-color: #f9f5f7;
        /*display: inline-block;*/
        height: 35px;
        margin: 0 auto;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -18px;
        width: 35px;
        z-index: 0;
        transform: rotate(45deg);
        transition: all .4s linear;
    }
     .detail_part2:hover .squere_bg2{
             display: none;
         }
     .detail_part2:hover .squere_bg3:before{
       width: 0;
     }
    .detail_part2:hover .squere_bg3:after{
        width: 0;
    }
  /*.detail_part2:hover .detail_part2:after{*/
  /*      width: 0;*/
  /*    transition: all .4s linear;*/
  /*  }*/
  /*  :hover .detail_part2:before{*/
  /*      width: 0;*/
  /*      transition: all .4s linear;*/
  /*  }*/
     .detail_part2 .squere_bg3 {
        height: 1px;
        margin: 0 auto;
        position: absolute;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
    }
     .detail_part2 .squere_bg3:before {
        content: "";
        position: absolute;
        top: -11px;
        right: 0;
        background-color: #fff;
        height: 1px;
        width: 45%;
        transition: all .4s linear;
    }

     .detail_part2 .squere_bg3:after {
        content: "";
        position: absolute;
        top: -11px;
        left: 0;
        background-color: #fff;
        height: 1px;
        width: 45%;
        transition: all .4s linear;
    }
    .detail_part1 .news_title:before {
        background-color: #ddd;
        content: "";
        height: 1px;
        position: absolute;
        right: 100%;
        top: 14px;
        margin: 0 auto 0 15px;
        width: 80px;
    }
    .detail_part1 .news_title:after {
        background-color: #ddd;
        content: "";
        height: 1px;
        position: absolute;
        left: 100%;
        top: 14px;
        margin: 0 15px auto 0;
        width: 80px;
    }
    .detail_part1 > h1 {
        color: #00003b;
        /*float: right;*/
        font-size: 1rem;
        font-family: 'IRANSansWeb';
        line-height: 30px;
        width: 100%;
        padding-left: 2em;

        text-align: center;
        margin-right: -10em;


    }
     .each_item {
        width: 30%;
        float: right;
        color: #AAAAAA;
        font-size: 0.8rem;
         font-family: 'IRANSansWeb';
        line-height: 21px;
        white-space: nowrap;

    }
   .each_item .icon_1 {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 18px auto;
        display: inline-block;
        height: 25px;
        vertical-align: middle;
        width: 25px;
    }
    .left{
    font-size: 11px;
        font-family: 'IRANSansWeb';
    direction: rtl;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    float: left;
    /*padding-right: 34px;*/
    width: 100%;
        height: 90em;
    }
    .right{
        font-size: 11px;
        font-family: 'IRANSansWeb';
        direction: rtl;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        float: right;
        width: 36%;
    }
    .left .detail_part1{
        font-size: 11px;
        font-family: 'IRANSansWeb';
        direction: rtl;
        margin: 25em;
        box-sizing: border-box;
        padding: 20px 0;
        text-align: center;
         float: left;
        width: 59%;
    }
    .list_style_box{
        /*font-size: 11px;*/
        /*direction: rtl;*/
        /*text-align: center;*/
        /*margin: 0;*/
        /*padding: 0;*/
        /*font-family: 'at1','tahoma';*/
        /*box-sizing: border-box;*/
        /*width: 100%;*/
        /*float: right;*/
        /*position: relative;*/
        /*height: 50px;*/
        /*margin-bottom: 15px;*/
    }
    .list_style2{
        font-size: 11px;
        font-family: 'IRANSansWeb';
        direction: rtl;
        text-align: center;
        padding: 0;
        box-sizing: border-box;
        margin: 0 auto;
        position: relative;
        left: 0;
        right: -15em;
        width: 100%;
    }
</style>