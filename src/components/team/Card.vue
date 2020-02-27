<template>
    <div class="content" style="margin-top: 7em">
<!--        <div class="d-xs-flex d-xl-flex d-sm-flex d-md-flex d-lg-flex flex-row  justify-content-around bd-highlight mb-3">-->

                    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 float-left mt-5">
            <div class="card mt-5 bg-light mr-4 wow shake" style="" id="card1">
                <div class="card-body">
                    <div class="dot  float-right d-flex " style="width:100px;height:100px;border-radius: 100%;transform: translate(40px,-50px)">
                        <img :src="card.url" alt="" style="width: 100px;height: 100px;border-radius: 100%;border: 2px solid darkblue">
                    </div>
                    <h5 class="card-title float-right ml-5">{{card.name}}</h5><br>
                    <h6 class="card-subtitle mb-2 text-muted float-right ml-5">{{ card.role}}</h6>
                    <p class="card-text  float-right text-right" style="margin-top: -1rem">{{card.description}}</p>
                    <div class="go-corner " href="#" style="background-color: #0d471c">
                        <div class="go-arrow">
                            «
                        </div>
                    </div>
                </div>
            </div>
            <!--        </div>-->
            <!--        <div class="col-xs-12  col-sm-12 col-md-6 col-lg-6">-->
<!--            <div class="card mt-5 bg-light " style="" id="card2">-->
<!--                <div class="card-body">-->
<!--                    <div class="dot  float-right d-flex " style="width:100px;height:100px;border-radius: 100%;transform: translate(40px,-50px)">-->
<!--                        <img src="../../assets/img/36.jpg" alt="" style="width: 100px;height: 100px;border-radius: 100%;border: 2px solid darkblue">-->
<!--                    </div>-->
<!--                    <h5 class="card-title float-right ml-5">رسول صیدی</h5><br>-->
<!--                    <h6 class="card-subtitle mb-2 text-muted float-right">برنامه نویس ارشد</h6>-->
<!--                    <p class="card-text  float-right text-right" style="margin-top: -1rem">کارشناسی ارشد دانشگاه تهران.عاشق کارشه و هر پروزه رو به بهترین نحو انجام میده.</p>-->
<!--                    <div class="go-corner " href="#">-->
<!--                        <div class="go-arrow">-->
<!--                            «-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            &lt;!&ndash;        </div>&ndash;&gt;-->
<!--            &lt;!&ndash;        <div class="col-xs-12  col-sm-12 col-md-6 col-lg-6">&ndash;&gt;-->
<!--            <div class="card mt-5 bg-light ml-4 " style="" id="card3">-->
<!--                <div class="card-body">-->
<!--                    <div class="dot  float-right d-flex " style="width:100px;height:100px;border-radius: 100%;transform: translate(40px,-50px)">-->
<!--                        <img src="../../assets/img/36.jpg" alt="" style="width: 100px;height: 100px;border-radius: 100%;border: 2px solid darkblue">-->
<!--                    </div>-->
<!--                    <h5 class="card-title float-right ml-5">رسول صیدی</h5><br>-->
<!--                    <h6 class="card-subtitle mb-2 text-muted float-right">برنامه نویس ارشد</h6>-->
<!--                    <p class="card-text  float-right text-right" style="margin-top: -1rem">کارشناسی ارشد دانشگاه تهران.عاشق کارشه و هر پروزه رو به بهترین نحو انجام میده.</p>-->
<!--                    <div class="go-corner " href="#">-->
<!--                        <div class="go-arrow">-->
<!--                            «-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            &lt;!&ndash;        </div>&ndash;&gt;-->
<!--        </div>-->
<!--        <div class="d-xs-flex d-xl-flex d-sm-flex d-md-flex d-lg-flex flex-row  justify-content-around bd-highlight mb-3">-->

<!--            &lt;!&ndash;        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">&ndash;&gt;-->
<!--            <div class="card mt-5 bg-light mr-4" style="" id="card4">-->
<!--                <div class="card-body">-->
<!--                    <div class="dot  float-right d-flex " style="width:100px;height:100px;border-radius: 100%;transform: translate(40px,-50px)">-->
<!--                        <img src="../../assets/img/36.jpg" alt="" style="width: 100px;height: 100px;border-radius: 100%;border: 2px solid darkblue">-->
<!--                    </div>-->
<!--                    <h5 class="card-title float-right ml-5">رسول صیدی</h5><br>-->
<!--                    <h6 class="card-subtitle mb-2 text-muted float-right">برنامه نویس ارشد</h6>-->
<!--                    <p class="card-text  float-right text-right" style="margin-top: -1rem">کارشناسی ارشد دانشگاه تهران.عاشق کارشه و هر پروزه رو به بهترین نحو انجام میده.</p>-->
<!--                    <div class="go-corner " href="#">-->
<!--                        <div class="go-arrow">-->
<!--                            «-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            &lt;!&ndash;        </div>&ndash;&gt;-->
<!--            &lt;!&ndash;        <div class="col-xs-12  col-sm-12 col-md-6 col-lg-6">&ndash;&gt;-->
<!--            <div class="card mt-5 bg-light " style="" id="card5">-->
<!--                <div class="card-body">-->
<!--                    <div class="dot  float-right d-flex " style="width:100px;height:100px;border-radius: 100%;transform: translate(40px,-50px)">-->
<!--                        <img src="../../assets/img/36.jpg" alt="" style="width: 100px;height: 100px;border-radius: 100%;border: 2px solid darkblue">-->
<!--                    </div>-->
<!--                    <h5 class="card-title float-right ml-5">رسول صیدی</h5><br>-->
<!--                    <h6 class="card-subtitle mb-2 text-muted float-right">برنامه نویس ارشد</h6>-->
<!--                    <p class="card-text  float-right text-right" style="margin-top: -1rem">کارشناسی ارشد دانشگاه تهران.عاشق کارشه و هر پروزه رو به بهترین نحو انجام میده.</p>-->
<!--                    <div class="go-corner " href="#">-->
<!--                        <div class="go-arrow">-->
<!--                            «-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            &lt;!&ndash;        </div>&ndash;&gt;-->
<!--            &lt;!&ndash;        <div class="col-xs-12  col-sm-12 col-md-6 col-lg-6">&ndash;&gt;-->
<!--            <div class="card mt-5 bg-light ml-4 " style="" id="card6">-->
<!--                <div class="card-body">-->
<!--                    <div class="dot  float-right d-flex " style="width:100px;height:100px;border-radius: 100%;transform: translate(40px,-50px)">-->
<!--                        <img src="../../assets/img/36.jpg" alt="" style="width: 100px;height: 100px;border-radius: 100%;border: 2px solid darkblue">-->
<!--                    </div>-->
<!--                    <h5 class="card-title float-right ml-5">رسول صیدی</h5><br>-->
<!--                    <h6 class="card-subtitle mb-2 text-muted float-right">برنامه نویس ارشد</h6>-->
<!--                    <p class="card-text  float-right text-right" style="margin-top: -1rem">کارشناسی ارشد دانشگاه تهران.عاشق کارشه و هر پروزه رو به بهترین نحو انجام میده.</p>-->
<!--                    <div class="go-corner " href="#">-->
<!--                        <div class="go-arrow">-->
<!--                            «-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            &lt;!&ndash;        </div>&ndash;&gt;-->
<!--        </div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "Card",
        props: ['card'],
    }
</script>

<style scoped>
    @media only screen and (max-width:426px ) {
            .card{
                width: 30rem!important;
                margin-left: 1.2rem;
            }
    }
    @media only screen and (width:768px ){
              .card{
                  width:22rem!important;
              }
    }
    @media only screen and (width:1024px ){
        .card{
            width:20rem!important;
        }
    }
    @media only screen and (width:1440px ){
        .card{
            margin-left: 3rem!important;

        }
    }
    @media only screen and (width:2560px ){
        .card{

            margin-left: 13rem!important;

        }
    }
    a{
        color: #003264;
        display: block;

    }
    a:hover{
        color: white;
        text-decoration: none;
    }
    .dot {
        height:100px;
        width: 100px;
        background-color: #bbb;
        border-radius: 50%;
        display: inline-block;
    }
    #card1 {
        width: 23rem;
        box-shadow: 0px 4px 8px rgb(0, 0, 67);

    }
    #card2 {
        width: 23rem;
        box-shadow: 0px 4px 8px rgb(0, 0, 67);

    }
    #card3 {
        width: 23rem;
        box-shadow: 0px 4px 8px rgb(0, 0, 67);

    }
    #card4 {
        width: 23rem;
        box-shadow: 0px 4px 8px rgb(0, 0, 67);

    }
    #card5 {
        width: 23rem;
        box-shadow: 0px 4px 8px rgb(0, 0, 67);

    }
    #card6 {
        width: 23rem;
        box-shadow: 0px 4px 8px rgb(0, 0, 67);

    }
    .go-corner {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 32px;
        height: 32px;
        overflow: hidden;
        top: 0;
        left: 0;
        background-color: #000073;
        border-radius: 4px 0 32px 0;
        transform: scale(1);
        /*transition: transform 0.25s ease-out;*/
    }


    .go-arrow {
        margin-top: -4px;
        margin-left: -4px;
        color: white;
        font-family:'IRANSansWeb';
    }
    h5,h6,p{
        font-family: 'IRANSansWeb';
    }
</style>