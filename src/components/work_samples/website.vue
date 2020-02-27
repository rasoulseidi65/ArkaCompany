<template>
    <div></div>
<!--    <div class="container">-->
<!--        <div class="row">-->
<!--            <div class="col-sm-8 col-md-4">-->
<!--                <div class="main">-->
<!--                    <div class="desktop">-->
<!--                        <div class="scroll-img" ></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-sm-8 col-md-4">-->
<!--                <div class="main">-->
<!--                    <div class="desktop">-->
<!--                        <div class="scroll-img2" ></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-sm-6 col-md-4">-->
<!--                <div class="main">-->
<!--                    <div class="desktop">-->
<!--                        <div class="scroll-img3" ></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-sm-6 col-md-4">-->
<!--                <div class="main">-->
<!--                    <div class="desktop">-->
<!--                        <div class="scroll-img4"></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-sm-6 col-md-4">-->
<!--                <div class="main">-->
<!--                    <div class="desktop">-->
<!--                        <div class="scroll-img5"></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            <div class="col-sm-6 col-md-4">-->
<!--                <div class="main">-->
<!--                    <div class="desktop">-->
<!--                        <div class="scroll-img6"></div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
</template>

<script>
    export default {
        name: "website",

    }
</script>

<style scoped>
    .main{
        position:relative;
        top: 70%;
        left: 50%;
        transform: translate(-50%,-50%);

    }
    .desktop {
        width: 100%;
        height: 300px;
        background: url(../../assets/img/lap1.png);
        background-size: 100%;
        background-repeat: no-repeat;
        position: relative;
    }
    .main .desktop .scroll-img {
        position: absolute;
        top: 37px;
        left: 82px;
        background: url(../../assets/img/35.jpg);
        width: 198px;
        height: 125px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop .scroll-img2 {
        position: absolute;
        top: 37px;
        left: 82px;
        background: url(../../assets/img/35.jpg);
        width: 198px;
        height: 125px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop .scroll-img3{
        position: absolute;
        top: 37px;
        left: 82px;
        background: url(../../assets/img/35.jpg);
        width: 198px;
        height: 125px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop .scroll-img4{
        position: absolute;
        top: 37px;
        left: 82px;
        background: url(../../assets/img/35.jpg);
        width: 198px;
        height: 125px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop .scroll-img5 {
        position: absolute;
        top: 37px;
        left: 82px;
        background: url(../../assets/img/35.jpg);
        width: 198px;
        height: 125px;
        background-size: 100%;
        background-position: top;
        -webkit-transition: all 5s ease;
        transition: all 5s ease;
    }
    .main .desktop .scroll-img6 {
        position: absolute;
        top: 37px;
        left: 82px;
        background: url(../../assets/img/35.jpg);
        width: 198px;
        height: 125px;
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

</style>