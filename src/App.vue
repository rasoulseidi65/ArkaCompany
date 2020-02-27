<template>
<router-view></router-view>
</template>

<script>

</script>

<style>
    @font-face {
        /*font-family: 'Yekan';*/
        /*src: url("../public/bootstrap/font/fontss/fonts/Yekan.eot");*/
        /*src: url("../public/bootstrap/font/fontss/fonts/Yekan.eot?#iefix");*/
        /*format("embeded-opentype"),*/
        /*format("woff"),*/
    /*url("../public/bootstrap/font/fontss/fonts/Yekan.ttf");*/
    /*    format("truetype"),*/
    /*url("../public/bootstrap/font/fontss/fonts/Yekan.svg#BYekan");*/
    /*    format("svg");*/
        font-family:IRANSansWeb;
        src: url("../public/bootstrap/font/fonts/IRANSansWeb(FaNum).ttf");

        /*src: url("../public/bootstrap/font/fonts/Yekan.otf") format("woff"), url("../public/bootstrap/font/fontss/fonts/Yekan.woff") format("woff"), url("../public/bootstrap/font/fontss/fonts/Yekan.woff") format("truetype");*/
        font-weight: normal;
        font-style: normal;
    }
    body{
        overflow-x: hidden;
        overflow-y: auto;
        font-family: 'IRANSansWeb';

    }

    a{
        color: #fffbfd;
        display: block;
        text-decoration: none!important;
        font-family: 'IRANSansWeb';

    }
    a:hover{
        color: white;
        text-decoration: none!important;
        font-family: 'IRANSansWeb';

    }
</style>
