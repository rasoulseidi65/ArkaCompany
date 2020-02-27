<template>
    <div>
        <Header></Header>
        <carousel></carousel>
        <product></product>
        <news></news>
        <br>
        <Footer></Footer>
    </div>
</template>

<script>

    import Carousel from "./Carousel";
    import Product from "./product";
    import News from "./News";
    import Header from '../../components/shared/Header'
    import Footer from '../../components/shared/Footer'

    export default {
        name: "Home",
        components: { News, Product, Carousel,Header,Footer }
    }
</script>

<style scoped>

</style>