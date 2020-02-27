<template>
    <div>
        <Header></Header>
        <div style="margin-top: 10em">
<!--            <div class='text-right mt-5 mb-3 mr-1'>-->
<!--                <a href='#' id='linktohome' class="fa fa-home "></a>-->
<!--                <span id='contact-us'>تماس با ما</span>-->
<!--            </div>-->

<!--            <div class='hr1 mr-3'></div>-->
            <br />
            <br />

            <div class='container-fluid '>
                <div class='row mb-md-5 justify-content-around'>
                    <div class='col-sm-12 col-md-6 col-lg-4 '>
                        <div class='text-center'>
                            <small>لطفاً نظرات خود را با ما در میان بگذارید </small>
                        </div>

                        <form>
                            <div class='form-group '>
                                <label class=' col-sm-12 text-right'><small>:نام و نام خانوادگی </small></label>

                                <input type='text' name='name' class='form-control text-right '
                                       placeholder="نام و نام خانوادگی">

                            </div>
                            <div class='form-group'>
                                <label class='col-sm-12 text-right'><small> :ایمیل</small></label>
                                <input type='email' name='email' class='form-control text-right' placeholder="@gmail.com">
                            </div>
                            <div class='form-group'>
                                <label class='col-sm-12 text-right'><small> :تلفن</small> </label>
                                <input type="text" name='phone' class='form-control text-right' placeholder="مثال:0217687">
                            </div>
                            <div class='form-group'>
                                <label class='col-sm-12 text-right'><small> :متن پیام</small> </label>
                                <textarea class='form-control' row='3'></textarea>
                            </div>

                            <button class='btn w-100' id='subutton'><small>ارسال</small></button>

                        </form>
                    </div>
                    <div class='col-sm-12 col-md-6 col-lg-6' id='map'>
                        <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5596.72337074273!2d48.417688956039!3d33.47973417071135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3feeb85fb79739fb%3A0x4cd75338667bd638!2sLorestan%20University!5e0!3m2!1sen!2s!4v1580613892533!5m2!1sen!2s"
                                width="600" height="450" frameborder="0" allowfullscreen=""></iframe>
                    </div>
                </div>
            </div>

            <div class='d-sm-flex   mb-5  flex-wrap justify-content-between'>
                <div class="card  border-0 col-sm-12 col-md-12 col-lg-5 wow fadeInLeft " id='card1'>
                    <div class="card-body">
                        <div class="card-title p-2 text-right">
                            <span class='  officetitle'>:دفتر تهران</span>
                        </div>
                        <div class='text-center'>
                            <img src="../../assets/img/pic.jpg" alt="Card image">
                        </div>
                        <div class=' text-right  p-3'>
                            <i class='fa fa-map-marker pl-3 coloro'> </i>
                            <span class='contactfont'>
                        کیلومتر ده جاده تهران دانشگاه لرستان پارک علم و فناوری
                    </span>
                        </div>
                        <div class=' text-right   p-3'>
                            <i class='fa fa-phone pl-3 coloro '> </i>
                            <span class='contactfont'>
                        09876555
                    </span>
                        </div>
                        <div class=' text-right   p-3'>
                            <i class='fa fa-fax pl-3 coloro '> </i>
                            <span class='contactfont'>
                        فکس
                    </span>
                        </div>
                        <div class=' text-right   p-3'>
                            <i class='fa fa-envelope-square pl-3 coloro '> </i>
                            <span class='contactfont'>
                        @gmail.com
                    </span>
                        </div>
                    </div>
                </div>

                <div class="card  border-0 col-sm-12 col-md-12 col-lg-5 wow fadeInRight" id='card2'>
                    <div class="card-body ">
                        <div class="card-title p-2 text-right ">
                            <span class='  officetitle'>:دفتر تهران</span>
                        </div>
                        <div class='text-center'>
                            <img src="../../assets/img/pic.jpg" alt="Card image">
                        </div>
                        <div class=' text-right  p-3'>
                            <i class='fa fa-map-marker pl-3 coloro'> </i>
                            <span class='contactfont'>
                        کیلومتر ده جاده تهران دانشگاه لرستان پارک علم و فناوری
                    </span>
                        </div>
                        <div class=' text-right   p-3'>
                            <i class='fa fa-phone pl-3 coloro '> </i>
                            <span class='contactfont'>
                        09876555
                    </span>
                        </div>
                        <div class=' text-right   p-3'>
                            <i class='fa fa-fax pl-3 coloro '> </i>
                            <span class='contactfont'>
                        فکس
                    </span>
                        </div>
                        <div class=' text-right   p-3'>
                            <i class='fa fa-envelope-square pl-3 coloro '> </i>
                            <span class='contactfont'>
                        @gmail.com
                    </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class='container-fluid' id='map1'>
                <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5596.72337074273!2d48.417688956039!3d33.47973417071135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3feeb85fb79739fb%3A0x4cd75338667bd638!2sLorestan%20University!5e0!3m2!1sen!2s!4v1580613892533!5m2!1sen!2s"
                        width="600" height="900" frameborder="0"  allowfullscreen=""></iframe>

            </div>

        </div>
        <Footer></Footer>
    </div>

</template>

<script>
    import Header from '../../components/shared/Header'
    import Footer from '../../components/shared/Footer'
    export default {
        name: "Contact",
        data() {
            return {

            }
        },
        methods: {


        },
        components: {
            Header: Header,
            Footer: Footer,
        },
    }
</script>

<style scoped>

    .coloro{
        color:rgb(38, 38, 138);
    }






    #map{
        position: relative;
        border-radius:1.5em ;
        overflow: hidden;


    }
    #map iframe{
        position: absolute;
        left:0em;
        top:0;
        width: 100%;
        height: 100%;
    }


    #map::before{
        content: " ";
        position: absolute;
        display: block;

        height: 100%;
        top: 0em;
        left: 1em;
        z-index: 1;

        border-left: 5em solid white;


        border-right:15em solid white;

        transform-origin: top right;
        -ms-transform: skew(-40deg, 0deg);
        -webkit-transform: skew(-40deg, 0deg);
        transform: skew(-40deg, 0deg);
    }

    @media(max-width:700px){
        #map{
            display: none;
        }
    }
    #map1{
        height:20em;
    }
    @media(min-width:700px){
        #map1{
            display: none;
        }
    }
    #card1, #card2{
        line-height: 1em;
        max-width: 100%;


    }
    @media(max-width:700px){
        #card1, #card2 {
            font-size: 0.6em;
            font-family: 'IRANSansWeb';
        }
    }
    .officetitle{
        color:white;
        font-size:1em;
        font-family: 'IRANSansWeb';
    }


    .card-title{
        background-color: rgb(0, 0, 59);/*#00003b;*/
        border-radius: 0.3em;
    }

    i{
        float: right;
    }

    /******************************************************************************************/

    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        font-size: 0.6em;
        font-family: 'IRANSansWeb';
    }
    ::-moz-placeholder { /* Firefox 19+ */
        font-size: 0.6em;
        font-family: 'IRANSansWeb';
    }
    :-ms-input-placeholder { /* IE 10+ */
        font-size: 0.6em;
        font-family: 'IRANSansWeb';
    }
    :-moz-placeholder { /* Firefox 18- */
        font-size: 0.6em;
        font-family: 'IRANSansWeb';
    }
    #subutton{

        /*border-top-left-radius:1em;*/
        /*border-bottom-right-radius: 1em;*/
        border-radius: 30px;
        color: #fffffe;
        background-color: rgba(0, 0, 59, 0.98)
    ;
    }
    #subutton:hover{
        border: 1px dashed #fffffe;
        /*border-bottom-left-radius: 1em;*/
        /*border-top-right-radius: 1em;*/
        /*border-top-left-radius: 0em;*/
        /*border-bottom-right-radius: 0em;*/
        background-color: #00003b;
        /*transition: all 0.3s linear;*/
        color:white;
    }


small,span,p{
    font-family: 'IRANSansWeb';
}





</style>