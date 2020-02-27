<template>
<div>
    <Header></Header>
    <div class="container" dir="rtl" style="margin-top: 10rem">

        <section class="container">
            <div class="left-half">
                <article>
                    <div class="card-header w-50 ml-2">
                        <span class="text-center">درباره شرکت</span>
                    </div>
                    <div class="card-body">
                        <p class="text-right wow fadeInRight" lang="fa">
                            .شرکت آرکا از سال 1395 کارش رو آغاز کرد.مدیر عامل این شرکت ارکا اقای محمد فرهادی هستند. این شرکت در زمینه های هوش مصنوعی،اپلیکیشن،طراحی سایت فعالیت دارد ولی عمده ترین زمینه کاری شرکت هوش مصنوعی ست.درسال 96 اولین محصولش  در حوزه ITS وارد بازار شد و باعث شد که به یک شرکت دانش بنیان تبدیل بشه و خدمت بزرگی به هموطنان عزیزمون شد و باعث شد کشور ایران بار دیگر به وجود نخبگان سرزمینش افتخار کند.و گواهی ثبت اختراع افتخار بزرگی بود که شرکت آرکا نسیبش شد. سیستم طرح ترافیک و سیستم تشخیص دود ، برنامه ی فشرده سازی و....از جمله محصولاتی هستند که ثبت اختراع شدند.و اکنون 4 ساله شدیم و خوشحالیم که باعث افتخار برای کشور عزیزمون ایران و خدمتگزار هموطنان عزیزمون هستیم.

                        </p>
                    </div>

                </article>
                <article>
                    <div class="card-header w-50">
                        <span class="text-center">اهداف و راهبردها</span>
                    </div>
                    <div class="card-body">
                        <p class="text-right wow fadeInLeft " lang="fa">
                            امروزه ما در عصر اینترنت ودنیای دیجیتال زندگی میکنیم و استفاده از کامپیوتر و اپلیکیشن ها برای همگان روز به روز در حال پیشرفت است .تیم آرکا در نظر داره که این مسیر رو برای هموطنان عزیز هموارتر کنه.وقادریم که اپلیکیشن ها و سایت های دلخواه شما رو با بهترین کیفیت و با استفاده از بروز ترین زبان های برنامه نویسی و نرم افزار های مربوطه طراحی کنیم .ما با اعتماد شما 4 ساله شدیم و هدفمان این است که با خدمت به هموطنان عزیز به این اعنماد پاسخ مثبت بدهیم.
                        </p>
                    </div>

                </article>
                <article>
                    <div class="card-header w-50">
                        <span class="text-center">اهداف و راهبردها</span>
                    </div>
                    <div class="card-body">
                        <p class="text-right wow fadeInRight" lang="fa">
                            امروزه ما در عصر اینترنت ودنیای دیجیتال زندگی میکنیم و استفاده از کامپیوتر و اپلیکیشن ها برای همگان روز به روز در حال پیشرفت است .تیم آرکا در نظر داره که این مسیر رو برای هموطنان عزیز هموارتر کنه.وقادریم که اپلیکیشن ها و سایت های دلخواه شما رو با بهترین کیفیت و با استفاده از بروز ترین زبان های برنامه نویسی و نرم افزار های مربوطه طراحی کنیم .ما با اعتماد شما 4 ساله شدیم و هدفمان این است که با خدمت به هموطنان عزیز به این اعنماد پاسخ مثبت بدهیم.
                        </p>
                    </div>

                </article>
            </div>
            <div class="right-half text-right">
                <article>
                    <span class="col-md-2"><img src="../../assets/img/iconfinder_Internet_5431740.png" alt=""  style="border: 1px solid #00003b;width:30px;height: 25px;border-radius: 50%"></span>
                    <span class="col-md-4">شرکت دانش بنیان آرکا.فعال در حوزه نرم افزار وIT</span>
                </article><br>
                <article>
                    <span class="col-md-2"><img src="../../assets/img/iconfinder_Internet_5431740.png" alt=""  style="border: 1px solid #00003b;width:30px;height: 25px;border-radius: 50%"></span>
                    <span class="col-md-4"> شرکت دانش بنیان آرکا.فعال در حوزه نرم افزار وIT</span>
                </article><br>
                <article>

                    <span class="col-md-2"><img src="../../assets/img/iconfinder_Internet_5431740.png" alt=""  style="border: 1px solid #00003b;width:30px;height: 25px;border-radius: 50%"></span>
                    <span class="col-md-4"> شرکت دانش بنیان آرکا.فعال در حوزه نرم افزار وIT</span>

                </article>
                <article>
                    <img src="../../assets/img/design.png" alt="" class="img">
                </article>
            </div>
        </section>
    </div>
    <Footer></Footer>
</div>




</template>

<script>
    import Header from '../../components/shared/Header'
    import Footer from '../../components/shared/Footer'
    export default {
        name: "about",

        components: {
            Header: Header,
            Footer: Footer,
        },
    }
</script>

<style scoped>

html, body, section {
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    font-family:'IRANSansWeb';
}

body {
    color: #fff;
    font-size: 1.25rem;
    line-height: 150%;


}
.img{
    /*width:15em;*/
    /*height:15em;*/
    /*border-radius: 100%;*/
    /*border: 6px solid #00003b;*/
}
.card-header{
    height:3em;
    background-color: #000030;
    border-radius:30px 0 0 30px;
    color: white
}

div {
    display: flex;
    flex-direction: column;
}



/* Pattern styles */
.container {
    display: flex;
}

.left-half {
    background-color:  rgba(173, 216, 230, 0.05);
    flex: 1;

}
p{
    padding:1rem;
}

.right-half {
    background-color: rgba(173, 216, 230, 0.05);
    flex: 1;

    border-right: 1.5px solid #00003b;
}
    p,span{
        font-family: 'IRANSansWeb';
    }
</style>