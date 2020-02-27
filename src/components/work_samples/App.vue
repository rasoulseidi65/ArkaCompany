<template>
    <div></div>

<!--<div class="container">-->
<!--    <br>-->
<!--    <div class="row mt-5 mb-5">-->
<!--        <div class="col-sm-6 col-md-3">-->
<!--            <div class="main">-->
<!--                <div class="desktop">-->
<!--                    <div class="scroll-img1" ></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-3">-->
<!--            <div class="main">-->
<!--                <div class="desktop">-->
<!--                    <div class="scroll-img2" ></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-3">-->
<!--            <div class="main">-->
<!--                <div class="desktop">-->
<!--                    <div class="scroll-img3" ></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-3">-->
<!--            <div class="main">-->
<!--                <div class="desktop">-->
<!--                    <div class="scroll-img4" ></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-3 mt-5">-->
<!--            <div class="main">-->
<!--                <div class="desktop">-->
<!--                    <div class="scroll-img5" ></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-3 mt-5">-->
<!--            <div class="main">-->
<!--                <div class="desktop">-->
<!--                    <div class="scroll-img6" ></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-3 mt-5">-->
<!--            <div class="main">-->
<!--                <div class="desktop">-->
<!--                    <div class="scroll-img7" ></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="col-sm-6 col-md-3 mt-5">-->
<!--            <div class="main">-->
<!--                <div class="desktop">-->
<!--                    <div class="scroll-img8" ></div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--    <br>-->
<!--    <br>-->
<!--</div>-->
</template>

<script>
    export default {
        name: "App",

        data(){
           return{

           }
        }
    }

</script>

<style scoped>
    .main{
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);

    }
    .main .desktop {
        width: 100px;
        height: 200px; /* half image height*/
        background: url(../../assets/img/157.png);
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;

    }
    .main .desktop .scroll-img1 {
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
    .main .desktop .scroll-img2 {
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
    .main .desktop .scroll-img3 {
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
    .main .desktop .scroll-img4 {
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
    .main .desktop .scroll-img5 {
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
    .main .desktop .scroll-img6 {
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
    .main .desktop .scroll-img7 {
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
    .main .desktop .scroll-img8 {
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
    .main .desktop .scroll-img1:hover {
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
    .main .desktop .scroll-img7:hover {
        background-position: bottom;
    }
    .main .desktop .scroll-img8:hover {
        background-position: bottom;
    }
</style>