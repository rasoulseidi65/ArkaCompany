<template>
  <div>
      <Header></Header>
      <Card v-for="(card,index) in cards" :key="index" :card="card"></Card>

      <br>
      <Footer></Footer>
  </div>
</template>

<script>
    import Card from "./Card";
    import Header from '../../components/shared/Header'
    import Footer from '../../components/shared/Footer'
    export default {
        name: "Team",
        data(){
            return{
                cards:[
                    {id:1,url:'./src/assets/img/36.jpg',name:'رسول صیدی',role:'برنامه نویس ارشد',description:'\n' +
                            'کارشناسی ارشد دانشگاه تهران.عاشق کارشه و هر پروزه رو به بهترین نحو انجام میده'},
                    {id:2,url:'../../assets/img/36.jpg',name:'الهام گودرزی',role:'معاون  شرکت  ',description:'\'کارشناسی ارشد دانشگاه تهران.عاشق کارشه.مهربونه و هر پروزه رو به بهترین نحو انجام میده'},
                    {id:3,url:'../../assets/img/36.jpg',name:'ستاره اسلامی',role:'کاراموز فرانت ',description:'\'کارشناسی ارشد دانشگاه تهران.عاشق کارشه.مهربونه و هر پروزه رو به بهترین نحو انجام میده'},
                    {id:4,url:'../../assets/img/36.jpg',name:'تارا نظری',role:'کاراموز نیتیو',description:'\'کارشناسی ارشد دانشگاه تهران.عاشق کارشه.مهربونه و هر پروزه رو به بهترین نحو انجام میده'},
                    {id:5,url:'../../assets/img/36.jpg',name:'زینب اکبری',role:'کاراموز بکند',description:'\'کارشناسی ارشد دانشگاه تهران.عاشق کارشه.مهربونه و هر پروزه رو به بهترین نحو انجام میده'},
                    {id:6,url:'../../assets/img/36.jpg',name:'پگاه سپهوند',role:'کاراموز فتوشاپ',description:'\'کارشناسی ارشد دانشگاه تهران.عاشق کارشه.مهربونه و هر پروزه رو به بهترین نحو انجام میده'}
                ]
            }
        },
        components: {Card,
        Header,Footer}
    }
</script>

<style scoped>

</style>