<template>
    <div>
        <Header></Header>
        <div class="wow zoomIn" style="margin-top: 10em">
            <div class='container-fluid'>
                <div class='row ml-2 mr-2 '>
                    <div class='col-sm-12 col-md-6 mb-2 '>
                        <div class="card " id='ch-border1'>
                            <div class="card-horizontal ">
                                <div class="img-square">
                                    <div class="ch-item ch-img-1  ">
                                        <div class='ch-info'>
                                            <h5> Web Design</h5>
                                            <p># React js, Asp.net</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body wow slideInLeft">
                                    <h4 class="card-title text-right">Web Design</h4>
                                    <h5 class='card-title text-right border-bottom border-info pb-4'> آتلیه تهیه وب سایت و
                                        پورتال</h5>
                                    <p class='card-title text-right'> تیم طراحی حرفه ای در کنار تیم برنامه نویسی مجرب</p>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class='col-sm-12 col-md-6 mb-2'>
                        <div class="card " id='ch-border2'>
                            <div class="card-horizontal ">
                                <div class="img-square ">
                                    <div class="ch-item ch-img-2">
                                        <div class='ch-info'>
                                            <h5> Web Design</h5>
                                            <p># React js, Asp.net</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body wow slideInLeft">
                                    <h4 class="card-title text-right">Web Design</h4>
                                    <h5 class='card-title text-right border-bottom border-info pb-4'> آتلیه تهیه وب سایت و
                                        پورتال</h5>
                                    <p class='card-title text-right'> تیم طراحی حرفه ای در کنار تیم برنامه نویسی مجرب</p>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class='row ml-2 mr-2'>
                    <div class='col-sm-12 col-md-6 mb-2'>
                        <div class="card " id='ch-border3'>
                            <div class="card-horizontal ">
                                <div class="img-square ">
                                    <div class="ch-item ch-img-3">
                                        <div class='ch-info'>
                                            <h5> Web Design</h5>
                                            <p># React js, Asp.net</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body wow slideInLeft ">
                                    <h4 class="card-title text-right">Web Design</h4>
                                    <h5 class='card-title text-right border-bottom border-info pb-4'> آتلیه تهیه وب سایت و
                                        پورتال</h5>
                                    <p class='card-title text-right'> تیم طراحی حرفه ای در کنار تیم برنامه نویسی مجرب</p>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class='col-sm-12 col-md-6 mb-2'>
                        <div class="card" id='ch-border4'>
                            <div class="card-horizontal  ">
                                <div class="img-square">
                                    <div class="ch-item ch-img-4">
                                        <div class='ch-info'>
                                            <h5> Web Design</h5>
                                            <p># React js, Asp.net</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body wow slideInLeft">
                                    <h4 class="card-title text-right">Web Design</h4>
                                    <h5 class='card-title text-right border-bottom border-info pb-4'> آتلیه تهیه وب سایت و
                                        پورتال</h5>
                                    <p class='card-title text-right'> تیم طراحی حرفه ای در کنار تیم برنامه نویسی مجرب</p>
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
    import Header from '../../components/shared/Header'
    import Footer from '../../components/shared/Footer'
    export default {
        name: "Service",
        components: {
            Header: Header,
            Footer: Footer,
        },

    }
</script>

<style scoped>


    @media (max-width:1024px){
        .img-square{
            padding-top:1.5em;
            display: flex;
            justify-content: center;

        }
    }
    @media(min-width: 1024px){
        .card-horizontal {
            display: flex;
            flex: 1 1 auto;

        }
        .img-square{
            padding:2em;
        }
    }




    .ch-item {
        width: 13em;
        height: 13em;
        border-radius: 50%;
        position: relative;
        cursor: default;
        box-shadow:
                inset 0 0 0 16px rgba(255,255,255,0.6);


        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;
    }

    .ch-img-1 {
        background: url(../../assets/img/pi1.jpg);
        background-position: center;
    }

    .ch-img-2 {
        background-image: url(../../assets/img/pi7.jpg);
        background-position: center;
    }

    .ch-img-3 {
        background-image: url(../../assets/img/pi2.jpg);
        background-position: center;
    }
    .ch-img-4 {
        background: url(../../assets/img/pi5.jpg);
        background-position: center;
    }
    #ch-border1,#ch-border2,#ch-border3,#ch-border4{
        border: 1px solid #0099CC;
        border-radius:1em;
    }
    .ch-info {
        position: absolute;
        background: rgba(63,147,147, 0.6);
        width: inherit;
        font-family: 'IRANSansWeb';
        height: inherit;
        border-radius: 50%;
        opacity: 0;
        text-align: center;
        -webkit-transition: all 0.4s ease-in-out;
        -moz-transition: all 0.4s ease-in-out;
        -o-transition: all 0.4s ease-in-out;
        -ms-transition: all 0.4s ease-in-out;
        transition: all 0.4s ease-in-out;

        -webkit-transform: scale(0);
        -moz-transform: scale(0);
        -o-transform: scale(0);
        -ms-transform: scale(0);
        transform: scale(0);
    }

    .ch-info h5 {
        color: #fff;
        margin: 0 30px ;
        padding: 80px 0 0 0;
        font-family: 'Yekan', sans-serif;
        text-shadow:
                0 0 1px #fff,
                0 1px 2px rgba(0,0,0,0.3);
    }

    .ch-info p {
        color: black;
        padding: 5px 5px;
        font-style: italic;
        font-weight: 900;
        margin: 0 20px ;
        font-size: 15px;
        font-family: 'IRANSansWeb';
        border-top: 2px solid rgba(255,255,255,0.5);
        opacity: 0;
        -webkit-transition: all 1s ease-in-out 0.4s;
        -moz-transition: all 1s ease-in-out 0.4s;
        -o-transition: all 1s ease-in-out 0.4s;
        -ms-transition: all 1s ease-in-out 0.4s;
        transition: all 1s ease-in-out 0.4s;
    }
    .card:hover{
        -webkit-box-shadow: 0 0 1em 0.3em rgba(0, 0, 255, 0.233);
        -moz-box-shadow: 0 0 1em 0.3em rgba(0, 0, 255, 0.233);
        box-shadow: 0 0 1em 0.3em rgba(0, 0, 255, 0.233);
        transition: all 0.5s linear;
        opacity:1;
    }

    .card:hover .ch-item {
        box-shadow:
                inset 0 0 0 1px rgba(255,255,255,0.1),
                0 1px 2px rgba(0,0,0,0.1);
    }
    .card:hover .ch-info {
        -webkit-transform: scale(1);
        -moz-transform: scale(1);
        -o-transform: scale(1);
        -ms-transform: scale(1);
        transform: scale(1);
        opacity: 1;
    }

    .card:hover .ch-info p {
        opacity: 1;
        font-family: 'IRANSansWeb';
    }
    .card:hover .ch-info h5{
        font-family: 'IRANSansWeb';
    }
    h4,h5,p{
        font-family: 'IRANSansWeb';
    }
</style>