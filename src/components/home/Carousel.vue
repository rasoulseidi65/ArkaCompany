<template>
    <div class="content w-100 wow zoomIn" id="mmm" style="margin-top: 8em;">
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner " id="d1"  >
                <div class="carousel-item active" >
                    <img src="../../assets/img/18.jpg" class="d-block w-100" alt=""  >
                    <div class="carousel-caption d-none d-md-block ">
                        <h5>First slide label</h5>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/img/3.jpg" class="d-block w-100" alt="">
<!--                    <div class="carousel-caption d-none d-md-block ">-->
<!--                        <h5>Second slide label</h5>-->
<!--                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>-->
<!--                    </div>-->
                    <div class="divtext wow shake">
                        <h2>Web Design</h2>
                        <small>طراحی وب سایت</small>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="../../assets/img/1.jpg" class="d-block w-100" alt="">
                    <div class="carousel-caption d-none d-md-block  ">
                        <h5>Third slide label</h5>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                </div>
            </div>
            <router-link class="carousel-control-prev" to="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </router-link>
            <router-link class="carousel-control-next" to="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Carousel"
    }
</script>

<style scoped>

    p,h5,small{
        font-family: 'IRANSansWeb';
    }
    .divtext {
        position:absolute;
        top:50%;
        left:-8%;
        width:100%;
        padding-top:13.5%;
        text-align:right;
        font-weight:bold;
        font-size:2vw;
        color: #00003b;
        font-family:IRANSansWeb;
        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count:1000;
        animation-direction:alter;
    }
    @keyframes example {
           0%   { left:-8%; top:50%;}
           25%  { left:-6%; top:50%;}
           50%  { left:-6%; top:52%;}
           75%  { left:-8%; top:52%;}
           100% { left:-8%; top:50%;}
       }

    @media only screen and (max-width:430px){
        .carousel{
        margin-left: 0;
        margin-right: -8rem;}
    }
    .carousel-item{
        height: 640px;
    }
    .w-100{
        height: 100%;
    }
    @media (max-width: 576px){
        .w-100 .carousel-caption {
            height: 15%!important;
        }
    }
    @media only screen and(width:768px) {
        .carousel{
            margin-right: -10rem;
            margin-left: 0;
        }
    }
    .d-none{
        display: block!important;
        border-radius: 30px;
        background-color: rgba(1, 1, 1, 0.47);
    }
    /*@media (max-width: 576px){*/
    /*    .carousel-caption{*/
    /*      visibility: visible;*/
    /*    }*/
    /*}*/
    .carousel-control-prev:hover{
        background-color: unset;
    }

    .carousel-control-next:hover{
        background-color: unset;
    }

</style>