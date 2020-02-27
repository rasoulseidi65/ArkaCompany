<template>

        <div>
            <div class="container-fluid">
                <div class="animated fadeIn">
                    <div class="row">
                        <div class="">
                            <div class="card mb-5" style="margin-top: 8rem;width:70rem;margin-left: 5rem">
                                <div class="card-header" style="background-color: #00003b;color: white">
                                    <h3 class="card-title text-right">نمایش خبرها</h3>

                                    <div class="card-tools">
                                        <div class="input-group input-group-sm float-left w-25" style="
                                        width: 150px;bottom: 3em">
                                            <input type="text" name="table_search" class="form-control float-right"
                                                   placeholder="جستجو">

                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover">
                                        <tr>
                                            <th>کد خبر</th>
                                            <th>گروه خبری</th>
                                            <th> عنوان خبر</th>
                                            <th> کلیدواژه عنوان</th>
                                            <th>خلاصه خبر</th>
                                            <th>متن خبر</th>
                                            <th> کلیدواژه متن </th>
                                            <th>تصویر خبر</th>
                                            <th> کلیدواژه تصویر</th>
                                            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

                                        </tr>
                                        <tr>
                                            <td>{{news_id}}</td>
                                            <td>{{group_news}}</td>
                                            <td>{{title}}</td>
                                            <td>{{key_titlenews}}</td>
                                            <!--<td><span class="badge badge-success">منتشر شده</span></td>-->
                                            <td>{{short_news}}</td>
                                            <td>{{detail_news}}</td>
                                            <td>{{key_news}}</td>
                                            <td>{{image_news}}</td>
                                            <td>{{key_imagenews}}</td>
                                            <td>

                                                <div class="row">
                                                    <i class="  fa fa-edit  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>219555</td>
                                            <td>سیاسی</td>
                                            <td>واریز یارانه معیشتی</td>
                                            <td>219555</td>
                                            <td>از امشب یارانه معیشتی به حساب سرپرست خوانوار ها واریز میشود.</td>
                                            <td>سیاسیتوقف عمدی چند خودرو در انتقاد به گرانی بنزین در مسیر شمال به جنوب
                                                بزرگراه امام علی تهران ،موجب ترافیک سنگین و طولانی ماشین ها شد.توقف عمدی چند
                                                خودرو در انتقاد به گرانی بنزین در مسیر شمال به جنوب بزرگراه امام علی تهران
                                                ،موجب ترافیک سنگین و طولانی ماشین ها شد.توقف عمدی چند خودرو در انتقاد به
                                                گرانی بنزین در مسیر شمال به جنوب بزرگراه امام علی تهران ،موجب ترافیک سنگین و
                                                طولانی ماشین ها شد.
                                            </td>
                                            <td>219555</td>
                                            <td>15278.jpg</td>
                                            <td>219555</td>
                                            <td>
                                                <div class="row">
                                                    <i class="fa fa-edit ml-2"></i>
                                                    <i class="fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>657555</td>
                                            <td>سیاسی</td>
                                            <td>توقیف خودروهای شناسایی شده اغتشاشگران</td>
                                            <td>در تهران و شهرستانها با توجه به دوربین های سطح شهر و وجود ماموران ناجا،پس از
                                                شناسایی ماشین هایی که اقدام به بستن خیابان ها میکردند،از شب گذشته مراحل
                                                بازداشت و تویف اموال انها آغاز شده است.
                                            </td>
                                            <td>توقف عمدی چند خودرو در انتقاد به گرانی بنزین در مسیر شمال به جنوب بزرگراه
                                                امام علی تهران ،موجب ترافیک سنگین و طولانی ماشین ها شد.توقف عمدی چند خودرو
                                                در انتقاد به گرانی بنزین در مسیر شمال به جنوب بزرگراه امام علی تهران ،موجب
                                                ترافیک سنگین و طولانی ماشین ها شد.توقف عمدی چند خودرو در انتقاد به گرانی
                                                بنزین در مسیر شمال به جنوب بزرگراه امام علی تهران ،موجب ترافیک سنگین و
                                                طولانی ماشین ها شد.سیاسی
                                            </td>
                                            <td>15278.jpg</td>
                                            <td>
                                                <div class="row">
                                                    <i class="fa fa-edit ml-2"></i>
                                                    <i class="fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>1755555</td>
                                            <td>سیاسی</td>
                                            <td>ترافیک چندصد متری در بزرگراه امام علی</td>
                                            <td>توقف عمدی چند خودرو در انتقاد به گرانی بنزین در مسیر شمال به جنوب بزرگراه
                                                امام علی تهران ،موجب ترافیک سنگین و طولانی ماشین ها شد.
                                            </td>
                                            <td>توقف عمدی چند خودرو در انتقاد به گرانی بنزین در مسیر شمال به جنوب بزرگراه
                                                امام علی تهران ،موجب ترافیک سنگین و طولانی ماشین ها شد.توقف عمدی چند خودرو
                                                در انتقاد به گرانی بنزین در مسیر شمال به جنوب بزرگراه امام علی تهران ،موجب
                                                ترافیک سنگین و طولانی ماشین ها شد.توقف عمدی چند خودرو در انتقاد به گرانی
                                                بنزین در مسیر شمال به جنوب بزرگراه امام علی تهران ،موجب ترافیک سنگین و
                                                طولانی ماشین ها شد.توقف عمدی چند خودرو در انتقاد به گرانی بنزین در مسیر شمال
                                                به جنوب بزرگراه امام علی تهران ،موجب ترافیک سنگین و طولانی ماشین ها شد.سیاسی
                                            </td>
                                            <td>15278.jpg</td>
                                            <td>
                                                <div class="row">
                                                    <i class="fa fa-edit ml-2"></i>
                                                    <i class="fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <!-- /.card-body -->
                            </div>
                            <!-- /.card -->
                        </div>
                    </div>
                </div>
            </div>
            <!-- /.conainer-fluid -->
        </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "show_news",
        data(){
            return{
                news_id:null,
                group_news:null,
                title:null,
                key_titlenews:null,
                short_news:null,
                image_news:null,
                key_imagenews:null,
                detail_news:null,
                key_news:null,
                date:null
            }
        },
        created(){
            axios.get('http://localhost:3000/api/v1/admin/news')
                .then((res)=>{
                    console.log(res.data)
                    const data=res.data;
                    this.news_id=data.news_id
                    this.group_news=data.group_news
                    this.title=data.title
                    this.key_titlenews=data.key_titlenews
                    this.short_news=data.short_news
                    this.image_news=data.image_news
                    this.key_imagenews=data.key_imagenews
                    this.detail_news=data.detail_news
                    this.key_news=data.key_news
                    this.date=data.date
                })
                .catch((err)=>{
                    console.log(err)
                })
        },
        mounted() {
            const plugin = document.createElement("script");
            plugin.setAttribute(
                "src",
                "/bootstrap/js/app.js",
                "src",
                "/bootstrap/js/views/main.js"
            );
            plugin.async = true;
            document.head.appendChild(plugin);

        },

    }
</script>

<style scoped>

    @font-face {
        font-family: IRANSansWeb;
        src: url("../../../public/bootstrap/font/fonts/IRANSansWeb(FaNum).ttf");
        /*src: url("../../../public/bootstrap/font/fontss/fonts/Yekan.otf") format("woff"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("woff"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("truetype");*/
        font-weight: normal; }
    h3,th,td,input{
        font-family: IRANSansWeb;
    }
</style>