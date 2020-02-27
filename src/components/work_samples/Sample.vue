<template>
    <div>
        <Header></Header>
        <div class="content" style="margin-top: 10em;">
            <main>

                <input id="tab1" type="radio" name="tabs" checked>
                <label   for="tab1" >طراحی سایت</label>

                <input id="tab2" type="radio" name="tabs">
                <label  for="tab2" >اپلیکیشن</label>

                <input id="tab3" type="radio" name="tabs">
                <label for="tab3">هوش مصنوعی</label>

                <input id="tab4" type="radio" name="tabs">
                <label  for="tab4">نرم افزار</label>

                <section  id="content1">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <div class="main">
                                <div class="desktop wow fadeInRight">
                                    <div class="xlg scroll-img" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="main">
                                <div class="desktop wow fadeInRight">
                                    <div class="xlg scroll-img2" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="main">
                                <div class="desktop wow fadeInRight">
                                    <div class="xlg scroll-img3" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="main">
                                <div class="desktop wow fadeInLeft">
                                    <div class="xlg scroll-img4" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="main">
                                <div class="desktop wow fadeInLeft">
                                    <div class="xlg scroll-img5" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <div class="main">
                                <div class="desktop wow fadeInLeft">
                                    <div class="xlg scroll-img6" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section  id="content2" >
                    <div class="row mt-5 mb-5">
                        <div class="col-sm-6 col-md-3">
                            <div class="main">
                                <div class="desktop1 wow fadeInLeft">
                                    <div class="scroll-img1-1" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="main">
                                <div class="desktop1 wow fadeInLeft">
                                    <div class="scroll-img1-2" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="main">
                                <div class="desktop1 wow fadeInLeft">
                                    <div class="scroll-img1-3" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3">
                            <div class="main">
                                <div class="desktop1 wow fadeInLeft">
                                    <div class="scroll-img1-4" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 mt-5">
                            <div class="main">
                                <div class="desktop1 wow fadeInRight">
                                    <div class="scroll-img1-5" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 mt-5">
                            <div class="main">
                                <div class="desktop1 wow fadeInRight">
                                    <div class="scroll-img1-6" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 mt-5">
                            <div class="main">
                                <div class="desktop1 wow fadeInRight">
                                    <div class="scroll-img1-7" ></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-md-3 mt-5">
                            <div class="main">
                                <div class="desktop1 wow fadeInRight">
                                    <div class="scroll-img1-8" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="content3">
                    <p>
                        Bacon ipsum dolor sit amet beef venison beef ribs kielbasa. Sausage pig leberkas, t-bone sirloin shoulder bresaola. Frankfurter rump porchetta ham. Pork belly prosciutto brisket meatloaf short ribs.
                    </p>
                    <p>
                        Brisket meatball turkey short loin boudin leberkas meatloaf chuck andouille pork loin pastrami spare ribs pancetta rump. Frankfurter corned beef beef tenderloin short loin meatloaf swine ground round venison.
                    </p>
                </section>

                <section id="content4" >
                    <p>
                        Bacon ipsum dolor sit amet landjaeger sausage brisket, jerky drumstick fatback boudin ball tip turducken. Pork belly meatball t-bone bresaola tail filet mignon kevin turkey ribeye shank flank doner cow kielbasa shankle. Pig swine chicken hamburger, tenderloin turkey rump ball tip sirloin frankfurter meatloaf boudin brisket ham hock. Hamburger venison brisket tri-tip andouille pork belly ball tip short ribs biltong meatball chuck. Pork chop ribeye tail short ribs, beef hamburger meatball kielbasa rump corned beef porchetta landjaeger flank. Doner rump frankfurter meatball meatloaf, cow kevin pork pork loin venison fatback spare ribs salami beef ribs.
                    </p>
                    <p>
                        Jerky jowl pork chop tongue, kielbasa shank venison. Capicola shank pig ribeye leberkas filet mignon brisket beef kevin tenderloin porchetta. Capicola fatback venison shank kielbasa, drumstick ribeye landjaeger beef kevin tail meatball pastrami prosciutto pancetta. Tail kevin spare ribs ground round ham ham hock brisket shoulder. Corned beef tri-tip leberkas flank sausage ham hock filet mignon beef ribs pancetta turkey.
                    </p>
                </section>

            </main>
            <br>
        </div>
        <Footer></Footer>
    </div>




</template>

<script>
    import Header from '../../components/shared/Header'
    import Footer from '../../components/shared/Footer'
    export default {
        name: "Sample",
        components: {
            Header: Header,
            Footer: Footer,
        },
    }
</script>

<style  scoped>
    body {
        font: 14px/1 'Yekan', sans-serif;
        color: #555;
        background: #eee;
    }
    @media only screen and (width: 2560px){
              .xlg{
                 top: 70px!important;
                 left: 154px!important;
                 width: 366px!important;
                 height: 229px!important;
             }
       main > label{
            margin-left: 170px!important;
        }
        #content2 .main{
            left: 80%!important;
        }
    }
    @media only screen and (width:1440px){
        .xlg{
            top: 37px!important;
            left: 83px!important;
            width: 198px!important;
            height: 125px!important;
        }
       main > label{
            margin-right: -13px!important;
        }
        #content2 .main{
            left: 76%!important;
        }
    }
    @media only screen and (width:1024px){

        .xlg{
            top: 25px!important;
            left: 57px!important;
            width: 135px!important;
            height: 88px!important;
        }
        #content2 .main{
            left: 68%!important;
        }
    }
    @media only screen and (width:768px){
       #content1 .desktop{
            /*width: 119%!important;*/
            /*padding: 20% 50%!important;*/
        }

        .xlg{
            top: 19px!important;
            left: 40px!important;
            width: 98px!important;
            height: 62px!important;
        }
       #content1 .main{
            left: 58%!important;
        }

       main > label{
             margin-left: 107px!important;
        }
    }
    @media only screen and (width:426px){
       #content1 .main .desktop{
            width: 138%!important;
        }
        #content1 .main{
            left:31%!important;
        }
        .xlg{
            top: 36px!important;
            left: 78px!important;
            width: 189px!important;
            height: 119px!important;
        }
        #content2 .main{
            left: 77%!important;
            padding-top: 10%;
        }
    }
    @media only screen and (width:375px){
       #content1 .main .desktop{
            width: 138%!important;
        }
       #content1 .main{
            left:31%!important;
        }
        .xlg{
            top: 32px!important;
            left: 71px!important;
            width: 172px!important;
            height: 109px!important;
        }
        #content2 .main{
            left: 77%!important;
            padding-top: 10%;
        }
    }
    @media only screen and (width:320px){
      #content1  .main .desktop{
            width: 138%!important;
        }
       #content1 .main{
            left:31%!important;
        }
        .xlg{
            top: 32px!important;
            left: 71px!important;
            width: 172px!important;
            height: 109px!important;
        }
        #content2 .main{
            left: 77%!important;
            padding-top: 10%;
        }
    }

    .main{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

    }
     .desktop {
          width: 100%;
         height: 388px;
        background: url(../../assets/img/lap1.png);
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
    }
     .xlg{
         top: 37px;
         left: 87px;
         width: 211px;
         height: 136px;
     }
      .main .desktop .scroll-img {
         position: absolute;
          background: url(../../assets/img/35.jpg);
          /*top: 37px;*/
          /*left: 87px;*/
          /*width: 211px;*/
          /*height: 136px;*/
         background-size: 100%;
         background-position: top;
         -webkit-transition: all 5s ease;
         transition: all 5s ease;
     }
     .main .desktop .scroll-img2 {
        position: absolute;
        /*top: 37px;*/
        /*left: 97px;*/
        background: url(../../assets/img/35.jpg);
        /*width: 198px;*/
        /*height: 125px;*/
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop .scroll-img3 {
        position: absolute;
        /*top: 37px;*/
        /*left: 97px;*/
        background: url(../../assets/img/35.jpg);
        /*width: 198px;*/
        /*height: 125px;*/
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop .scroll-img4 {
        position: absolute;
        /*top: 37px;*/
        /*left: 97px;*/
        background: url(../../assets/img/35.jpg);
        /*width: 198px;*/
        /*height: 125px;*/
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop .scroll-img5 {
        position: absolute;
        /*top: 37px;*/
        /*left: 97px;*/
        background: url(../../assets/img/35.jpg);
        /*width: 198px;*/
        /*height: 125px;*/
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop .scroll-img6 {
        position: absolute;
        /*top: 37px;*/
        /*left: 97px;*/
        background: url(../../assets/img/35.jpg);
        /*width: 198px;*/
        /*height: 125px;*/
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
 .main .desktop .scroll-img:hover {
        background-position: bottom;
    }
   .main .desktop .scroll-img2:hover {
        background-position: bottom;
    }
   .main .desktop .scroll-img3:hover {
        background-position: bottom;
    }
    .main .desktop .scroll-img4:hover {
        background-position: bottom;
    }
   .main .desktop .scroll-img5:hover {
        background-position: bottom;
    }
   .main .desktop .scroll-img6:hover {
        background-position: bottom;
    }

    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

    }

    html, body {
        height: 100%;
    }



    h1 {
        padding: 50px 0;
        font-weight: 400;
        text-align: center;
        font-family: 'IRANSansWeb';
    }

    p {
        margin: 0 0 20px;
        line-height: 1.5;
        font-family: 'IRANSansWeb';
    }

    main {
        min-width: 320px;
        max-width:80%;
        padding: 50px;
        margin: 0 auto;
        background: #fff;
    }

    section {
        display: none;
        padding: 20px 0 0;
        border-top: 1px solid #ddd;
    }

    input {
        display: none;
    }

    label {
        display: inline-block;
        margin: 0 0 -1px;
        padding: 15px 98px;
        font-weight: 600;
        font-family: 'IRANSansWeb';
        text-align: center;
        color: #bbb;
        border: 1px solid transparent;
    }

    label:before {
        font-family:IRANSansWeb;
        font-weight: normal;
        margin-right: 10px;
    }

    label[for*='1']:before {
        content: '\f1cb';
    }

    label[for*='2']:before {
        content: '\f17d';
    }

    label[for*='3']:before {
        content: '\f16b';
    }

    label[for*='4']:before {
        content: '\f1a9';
    }

    label:hover {
        color: #888;
        cursor: pointer;
    }

    input:checked + label {
        color: #555;
        border: 1px solid #ddd;
        border-top: 2px solid #000098;
        border-bottom: 1px solid #fff;
    }

    #tab1:checked ~ #content1,
    #tab2:checked ~ #content2,
    #tab3:checked ~ #content3,
    #tab4:checked ~ #content4 {
        display: block;
    }

    @media screen and (max-width: 650px) {
        label {
            font-size: 0;
        }

        label:before {
            margin: 0;
            font-size: 18px;
        }
    }
    @media screen and (max-width: 400px) {
        label {
            padding: 15px;
        }
    }
    #content2 .main{
        left: 83%;
    }
    .main .desktop1 {
        width: 100px;
        height: 200px; /* half image height*/
        background: url(../../assets/img/157.png);
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;

    }
    .main .desktop1 .scroll-img1-1 {
        position: absolute;
        top: 12px;
        left: 6px;
        background: url(../../assets/img/35.jpg);
        width: 89px;
        height: 183px;
        border-radius: 10px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop1 .scroll-img1-2{
        position: absolute;
        top: 12px;
        left: 6px;
        background: url(../../assets/img/35.jpg);
        width: 89px;
        height: 183px;
        border-radius: 10px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop1 .scroll-img1-3 {
        position: absolute;
        top: 12px;
        left: 6px;
        background: url(../../assets/img/35.jpg);
        width: 89px;
        height: 183px;
        border-radius: 10px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop1 .scroll-img1-4 {
        position: absolute;
        top: 12px;
        left: 6px;
        background: url(../../assets/img/35.jpg);
        width: 89px;
        height: 183px;
        border-radius: 10px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop1 .scroll-img1-5 {
        position: absolute;
        top: 12px;
        left: 6px;
        background: url(../../assets/img/35.jpg);
        width: 89px;
        height: 183px;
        border-radius: 10px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop1 .scroll-img1-6 {
        position: absolute;
        top: 12px;
        left: 6px;
        background: url(../../assets/img/35.jpg);
        width: 89px;
        height: 183px;
        border-radius: 10px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop1 .scroll-img1-7 {
        position: absolute;
        top: 12px;
        left: 6px;
        background: url(../../assets/img/35.jpg);
        width: 89px;
        height: 183px;
        border-radius: 10px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop1 .scroll-img1-8 {
        position: absolute;
        top: 12px;
        left: 6px;
        background: url(../../assets/img/35.jpg);
        width: 89px;
        height: 183px;
        border-radius: 10px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop1 .scroll-img1-1:hover {
        background-position: bottom;
    }
    .main .desktop1 .scroll-img1-2:hover {
        background-position: bottom;
    }
    .main .desktop1 .scroll-img1-3:hover {
        background-position: bottom;
    }
    .main .desktop1 .scroll-img1-4:hover {
        background-position: bottom;
    }
    .main .desktop1 .scroll-img1-5:hover {
        background-position: bottom;
    }
    .main .desktop1 .scroll-img1-6:hover {
        background-position: bottom;
    }
    .main .desktop1 .scroll-img1-7:hover {
        background-position: bottom;
    }
    .main .desktop1 .scroll-img1-8:hover {
        background-position: bottom;
    }

</style>