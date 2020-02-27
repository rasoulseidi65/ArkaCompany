<template>
 

        <div class="content " style="margin-top: 13em">
            <div class="t1">
                <div class="card col-md-3 col-lg-3 col-sm-12 mr-4 wow fadeInLeft " style="float: left;margin-left: 10%;height: 450px" id="t2">
                    <img src="../../assets/img/5.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supp.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <router-link to="#" class="btn btn-light " >Go somewhere</router-link>
                    </div>
                </div>
                <div class="card col-md-3 col-lg-3 col-sm-12 mr-4 wow fadeInDown" style="float: left;height: 450px" id="t3">
                    <img src="../../assets/img/6.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <router-link to="#" class="btn btn-light">Go somewhere</router-link>
                    </div>
                </div>
                <div class="card col-md-3 col-lg-3 col-sm-12 wow fadeInRight " id="t4" style="height: 450px">
                    <img src="../../assets/img/5.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <router-link to="#" class="btn btn-light">Go somewhere</router-link>
                    </div>
                </div>
            </div>
        </div>



</template>

<script>

    export default {
        name: "product",

    }
</script>

<style scoped>
    p,h5,a{
        font-family: 'IRANSansWeb';
    }
    @media only screen and (width: 320px){
        .t1{
           left:0;
            width: 115%;
        }
    }
    @media only screen and (width: 375px){
        .t1{
            width: 112%;

        }

    }
    @media  screen and (max-width:430px){
        #t2{
            right: 0.001rem;


        }
        #t3{
           left: 2.6rem;
            top:2em;
        }
        #t4{
            left: 2.6rem;
            top:4em;
        }
    }
    #t2:hover{

        box-shadow:  rgb(209, 209, 213) 0px 0px 6px;
        transition: all 300ms ease-in-out 0s;
        transform: translateY(-5%);
    }
    #t3:hover{
        box-shadow:  rgb(209, 209, 213) 0px 0px 6px;
        transition: all 300ms ease-in-out 0s;
        transform: translateY(-5%);
    }
    #t4:hover{
        box-shadow:  rgb(209, 209, 213) 0px 0px 6px;
        transition: all 300ms ease-in-out 0s;
        transform: translateY(-5%);
    }
    .card:hover .btn{
        background-color: #1e3ba5;
        color: white;
    }
    .btn{
        color: #1e3ba5;
        border: 1px solid gray;
        border-radius: 30px;
    }

</style>