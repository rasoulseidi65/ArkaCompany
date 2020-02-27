<template>
    <div class="content mb-5">
        <div class="navigation-wrap  start-header start-style" style="background-color: #000032" >
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <nav class="navbar navbar-expand-md navbar-light">

                            <router-link class="navbar-brand" to="#" target="_blank"><img src="../../assets/img/Arka_logo.png" alt="" style="width: 3em;height: 3em"></router-link>
                           <span class="col-md-2 col-lg-2 col-sm-2 wow flash " id="text1"> Arka Invent</span>

                            <button class="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon "></span>
                            </button>

                            <div class="collapse navbar-collapse "  id="navbarSupportedContent">
                                <ul class="navbar-nav ml-auto py-4 py-md-0" dir="rtl">
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <router-link class="nav-link mt-5" to="./">صفحه اصلی</router-link>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <router-link class="nav-link dropdown-toggle mt-5" data-toggle="dropdown" to="./Product" role="button" aria-haspopup="true" aria-expanded="false">محصولات</router-link>
                                        <div class="dropdown-menu" dir="rtl" style="height: 12rem;width: 40em;margin-left: -29rem">
                                            <div class="arrow-up"></div>
                                         <div class="row">
                                             <div class="col-md-6 sub mt-4 text-right" style="border-left: 1px solid #d0d0d0;">
                                             <router-link class="dropdown-item" to="#">محصول یک</router-link>
                                             <router-link class="dropdown-item" to="#">محصول دو</router-link>
                                             <router-link class="dropdown-item" to="#">محصول با کیفیت سه</router-link>
                                             <router-link class="dropdown-item" to="#">محصول چهار</router-link>
                                         </div>
                                            <div class="col-md-6 sub mt-4 text-right">
                                                <router-link class="dropdown-item" to="#">محصول یک</router-link>
                                                <router-link class="dropdown-item" to="#">محصول دو</router-link>
                                                <router-link class="dropdown-item" to="#">محصول با کیفیت سه</router-link>
                                                <router-link class="dropdown-item" to="#">محصول چهار</router-link>
                                            </div>
                                         </div>
                                        </div>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <router-link class="nav-link mt-5" to="./Service">خدمات</router-link>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <router-link class="nav-link mt-5" to="./Sample">نمونه کارها</router-link>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <router-link class="nav-link mt-5" data-toggle="" to="./Team" role="button" aria-haspopup="true" aria-expanded="false">تیم کاری</router-link>

                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <router-link class="nav-link mt-5" to="/#news" exact>اخبار و رویدادها</router-link>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <router-link class="nav-link mt-5" to="./about">درباره شرکت</router-link>
                                    </li>
                                    <li class="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                        <router-link class="nav-link mt-5" to="./Contact">تماس با ما</router-link>
                                    </li>
                                </ul>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


    export default {

        name: "AppHeader",
          // data(){
          //   return{
          //       link:{
          //           hash:'#data'
          //       }
          //   }
          // }


    }

</script>

<style scoped>
    .nav-link{
        font-family: 'IRANSansWeb';
    }
    @media only screen and (width: 768px){
        .nav-link{
            font-size: 11px;
        }
    }
    body{

        font-size: 16px;
        font-family: 'IRANSansWeb';
        line-height: 24px;
        font-weight: 400;
        color: #212112;
        background-position: center;
        background-repeat: repeat;
        background-size: 7%;
        background-color: white;
        overflow-x: hidden;
        transition: all 200ms linear;
    }
    ::selection {
        color: white;
        background-color: white;
    }
    ::-moz-selection {
        color: #fff;
        background-color: #ffffff;
    }

    .start-header {
        opacity: 1;
        transform: translateY(0);
        padding: 10px 0;
        box-shadow: 0 10px 30px 0 rgba(138, 155, 165, 0.15);
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .start-header.scroll-on {
        box-shadow: 0 5px 10px 0 rgba(58, 55, 59, 0.93);
        padding: 5px 0;
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .start-header.scroll-on .navbar-brand img{
        height: 28px;
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .navigation-wrap{
        position:fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .navbar{
        padding: 0;
    }
    .navbar-brand img{
        height: 52px;
        width: auto;
        display: block;
        -webkit-transition : all 0.3s ease-out;
        transition : all 0.3s ease-out;
    }
    .navbar-toggler {
        float: right;
        border: none;
        padding-right: 0;
    }
    .navbar-toggler:active,
    .navbar-toggler:focus {
        outline: none;
    }
    .navbar-light .navbar-toggler-icon {
        width: 24px;
        height: 17px;
        background-image: none;
        position: relative;
        border-bottom: 1px solid #ffffff;
        transition: all 300ms linear;
    }
    .navbar-light .navbar-toggler-icon:after,
    .navbar-light .navbar-toggler-icon:before{
        width: 24px;
        position: absolute;
        height: 1px;
        background-color: #ffffff;
        top: 0;
        left: 0;
        content: '';
        z-index: 2;
        transition: all 300ms linear;
    }
    .navbar-light .navbar-toggler-icon:after{
        top: 8px;
    }
    .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:after {
        transform: rotate(45deg);
    }
    .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon:before {
        transform: translateY(8px) rotate(-45deg);
    }
    .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
        border-color: transparent;
    }
    .nav-link{
        color: #ffffff !important;
        font-weight: 500;
        transition: all 200ms linear;
    }
    .nav-item:hover .nav-link{
        color: #ffffff !important;
        text-decoration: none;
    }
    .nav-item.active .nav-link{
        color: #777 !important;
    }
    .nav-link {
        position: relative;
        padding: 5px 0 !important;
        display: inline-block;
    }
    .nav-item:after{
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 100%;
        height: 2px;
        content: '';
        background-color: #ffffff;
        opacity: 0;
        transition: all 200ms linear;
    }
    .nav-item:hover:after{
        bottom: 0;
        opacity: 1;
    }
    .nav-item.active:hover:after{
        opacity: 0;
    }
    .nav-item{
        position: relative;
        transition: all 200ms linear;
    }



    .nav-item .dropdown-menu {
        transform: translate3d(0, 10px, 0);
        visibility: hidden;
        opacity: 0;
        max-height: 0;
        display: block;
        padding: 0;
        margin: 0;
        transition: all 200ms linear;
    }
    .nav-item.show .dropdown-menu {
        opacity: 1;
        visibility: visible;
        max-height: 999px;
        transform: translate3d(0, 0px, 0);
    }
    .dropdown-menu {
        padding: 10px!important;
        margin: 0;
        font-size: 13px;
        font-family: 'IRANSansWeb';
        letter-spacing: 1px;
        color: #212121;
        background-color: #fcfaff;
        border: none;
        border-radius: 3px;
        box-shadow: 0 5px 10px 0 rgba(138, 155, 165, 0.15);
        transition: all 200ms linear;
    }
    .dropdown-toggle::after {
        display: none;
    }

    .dropdown-item {
        padding: 3px 15px;
        color: black;
        border-radius: 2px;
        transition: all 200ms linear;
        font-weight: bold;
        font-family: 'IRANSansWeb';
    }
    .dropdown-item:hover,
    .dropdown-item:focus {
        color: #fff;
        background-color: rgba(0, 0, 59, 0.98);
        border-radius: 30px;
        text-decoration: none;
    }

    body.dark{
        color: #fff;
        background-color: #1f2029;
    }
    body.dark h1{
        color: #fff;
        font-family: 'IRANSansWeb';
    }
    body.dark h1 span{
        transition-delay: 0ms !important;
    }
    body.dark p{
        color: #fff;
        transition-delay: 0ms !important;
    }
    body.dark .bg-light {
        background-color: #14151a !important;
    }
    body.dark .start-header {
        box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.15);
    }
    body.dark .start-header.scroll-on {
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.15);
    }
    body.dark .nav-link{
        color: #fff !important;
    }
    body.dark .nav-item.active .nav-link{
        color: #999 !important;
    }
    body.dark .dropdown-menu {
        color: #fff;
        background-color: #1f2029;
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);
    }
    body.dark .dropdown-item {
        color: #fff;
    }
    body.dark .navbar-light .navbar-toggler-icon {
        border-bottom: 1px solid #fff;
    }
    body.dark .navbar-light .navbar-toggler-icon:after,
    body.dark .navbar-light .navbar-toggler-icon:before{
        background-color: #fff;
    }
    body.dark .navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
        border-color: transparent;
    }



    /* #Media
    ================================================== */

    @media (max-width: 767px) {
        h1{
            font-size: 38px;
        }
        .nav-item:after{
            display: none;
        }
        .nav-item::before {
            position: absolute;
            display: block;
            top: 15px;
            left: 0;
            width: 11px;
            height: 1px;
            content: "";
            border: none;
            background-color: #ffffff;
            vertical-align: 0;
        }
        .dropdown-toggle::after {
            position: absolute;
            display: block;
            top: 10px;
            left: -23px;
            width: 1px;
            height: 11px;
            content: "";
            border: none;
            background-color: #ffffff;
            vertical-align: 0;
            transition: all 200ms linear;
        }
        .dropdown-toggle[aria-expanded="true"]::after{
            transform: rotate(90deg);
            opacity: 0;
        }
        .dropdown-menu {
            padding: 0 !important;
            background-color: transparent;
            box-shadow: none;
            transition: all 200ms linear;
            float: right;
            /*border: 1px solid white;*/
            height: 17rem!important;
            /*border-radius: 30px;*/
        }
        .dropdown-menu .dropdown-item{
            color: white;
        }

        .dropdown-toggle[aria-expanded="true"] + .dropdown-menu {
            margin-top: 10px !important;
            margin-bottom: 20px !important;
        }
        body.dark .nav-item::before {
            background-color: #fff;
        }
        body.dark .dropdown-toggle::after {
            background-color: #fff;
        }
        body.dark .dropdown-menu {
            background-color: transparent;
            box-shadow: none;
        }
       .dropdown-menu .arrow-up{
            display: none;
        }
    }
    .arrow-up{
        width: 0;
        height: 0;
        border-left: 7px solid transparent;
        border-right: 7px solid transparent;
        border-bottom: 7px solid white;
        margin-right: 20px;
        position: relative;
        z-index: 99999!important;
        margin-top: -15px;
        display: block;
    }
    #text1{
        color: white;
        font-weight: bold;
        font-size:small;
        font-family: 'IRANSansWeb';
        margin-left: -7.5em;
        margin-top: 6em;
        animation-duration: 1s;
        animation-iteration-count:1000000000;
    }
    /*@media (min-width: 576px){*/
    /*    .navbar-expand-sm .navbar-nav .dropdown:hover .dropdown-menu{*/
    /*        display: block;*/
    /*    }*/
    /*}*/
    /*.navbar .navbar-nav .dropdown-menu  li:hover{*/
    /*    text-shadow: darkblue;*/
    /*    position: inherit;*/
    /*    !*width: 25rem;*!*/
    /*}*/
    /*a{*/
    /*    color: #003264;*/
    /*    display: block;*/
    /*    text-underline: none;*/
    /*}*/
    /*a:hover{*/
    /*    color: white;*/
    /*    text-decoration: none;*/
    /*}*/
    /*#img{*/
    /*    width: 15%;*/
    /*    height:6%;*/
    /*}*/
    /*#text1{*/
    /*    color: white;*/
    /*    font-weight: bold;*/
    /*    font-size:small;*/
    /*}*/
    /*@media  screen and (max-width: 567px)  {*/
    /*    #img{*/
    /*        width: 20px;*/
    /*        margin-left: 30rem;*/
    /*    }*/
    /*}*/
    /*#text2{*/
    /*    color: white;*/
    /*    font-weight: bold;*/
    /*    font-size:small;*/
    /*}*/
    /*.content{*/
    /*    padding-right: 7%;*/
    /*}*/
    /*#div{*/
    /*    width: 600px;height: 170px;*/
    /*}*/
    /*@media screen and (max-width: 768px){*/
    /*    #div{*/
    /*        height: 270px;*/

    /*    }*/
    /*    .dropdown-menu  li{*/
    /*        padding-left: 10em;*/
    /*        float: right;*/
    /*    }*/
    /*}*/
    /*.dropdown-menu{*/
    /*    margin-left: -30rem;*/
    /*}*/
    /*#product2:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*#product3:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/
    /*}*/
    /*#product4:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/
    /*}*/
    /*#product5:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/
    /*}*/
    /*#product6:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*#news1:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*#news2:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*#news3:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*#news4:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*.arrow-up{*/
    /*    width: 0;*/
    /*    height: 0;*/
    /*    border-left: 7px solid transparent;*/
    /*    border-right: 7px solid transparent;*/
    /*    border-bottom: 7px solid white;*/
    /*    margin-right: 20px;*/
    /*    position: relative;*/
    /*    z-index: 99999!important;*/
    /*    margin-top: -14px;*/
    /*    display: block;*/
    /*}*/
    /*#about1:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*#about2:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*#about3:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*#about4:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*#about5:hover{*/
    /*    background-color: rgb(0, 0, 59);*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*    text-decoration: none;*/
    /*    width: 18rem;*/
    /*    height: 3rem;*/
    /*    text-align:right;*/
    /*    display: block;*/
    /*    font-size:large;*/

    /*}*/
    /*.arrow-up{*/
    /*    width: 0;*/
    /*    height: 0;*/
    /*    border-left: 7px solid transparent;*/
    /*    border-right: 7px solid transparent;*/
    /*    border-bottom: 7px solid white;*/
    /*    margin-right: 70px;*/
    /*    position: relative;*/
    /*    z-index: 99999!important;*/
    /*    margin-top: -14px;*/
    /*    display: block;*/
    /*}*/
    /*.arrow-up1{*/
    /*    width: 0;*/
    /*    height: 0;*/
    /*    border-left: 7px solid transparent;*/
    /*    border-right: 7px solid transparent;*/
    /*    border-bottom: 7px solid white;*/
    /*    margin-right: 140px;*/
    /*    position: relative;*/
    /*    z-index: 99999!important;*/
    /*    margin-top: -14px;*/
    /*    display: block;*/
    /*}*/
    /*.arrow-up2{*/
    /*    width: 0;*/
    /*    height: 0;*/
    /*    border-left: 7px solid transparent;*/
    /*    border-right: 7px solid transparent;*/
    /*    border-bottom: 7px solid white;*/
    /*    margin-right: 30px;*/
    /*    position: relative;*/
    /*    z-index: 99999!important;*/
    /*    margin-top: -14px;*/
    /*    display: block;*/
    /*}*/

    /*.navbar .navbar-nav .dropdown-menu  li:hover{*/
    /*    text-shadow: darkblue;*/
    /*    position: inherit;*/
    /*}*/

    /*#sub-menu1{*/

    /*    border-left: 1px solid #d0d0d0;*/
    /*    line-height: 3rem;*/

    /*}*/
    /*#sub-menu2{*/
    /*    line-height: 3rem;*/

    /*}*/
    /*#sub-menu3{*/
    /*    line-height: 2rem;*/
    /*}*/

    /*#sub-menu4 {*/
    /*    border-left: 1px solid #d0d0d0;*/
    /*    line-height: 3rem;*/
    /*}*/
    /*#sub-menu5 {*/
    /*    line-height: 3rem;*/
    /*}*/
    /*#r1{*/
    /*    background-color: #00003b;*/
    /*    background-position: center center;*/
    /*    background-size: 100%;*/
    /*}*/


    /*#home{*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*}*/

    /*#PROPERTIES{*/
    /*     color: white;*/
    /*     border-radius: 30px;*/
    /* }*/
    /*#service{*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*}*/
    /*#samples{*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*}*/
    /*#team{*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*}*/
    /*#NEWS{*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*}*/
    /*#AGENTS{*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*}*/
    /*#CONTACT{*/
    /*    color: white;*/
    /*    border-radius: 30px;*/
    /*}*/

</style>