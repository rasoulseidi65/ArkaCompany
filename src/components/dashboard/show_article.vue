<template>

        <div class="">

            <div class="container-fluid">
                <div class="animated fadeIn">
                    <div class="row">
                        <div class="mr-5 ml-5"  style="margin-top: 8rem;">
                            <div class="card mb-5">
                                <div class="card-header" style="background-color: #00003b;color: white">
                                    <h3 class="card-title text-right">نمایش مقاله</h3>

                                    <div class="card-tools">
                                        <div class="input-group input-group-sm float-left w-25" style="width: 150px; bottom: 3em">
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
                                        <tr class="text-right">
                                            <th>کد مقاله</th>
                                            <th> عنوان مقاله</th>
                                            <th>  کلیدواژه عنوان </th>
                                            <th class="pr-5">خلاصه مقاله</th>
                                            <th class="pr-5">متن مقاله</th>
                                            <th>  کلیدواژه متن </th>
                                            <th>نویسنده مقاله</th>
                                            <th>فایل</th>
                                            <th>تصویر مقاله</th>
                                            <th>  کلیدواژه تصویر </th>
                                            <th>تاریخ </th>
                                            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

                                        </tr>
                                        <tr>
                                            <td>1835555</td>
                                            <td>{{title}}</td>
                                            <td>{{key_titlearticle}}</td>
                                            <!--<td><span class="badge badge-success">منتشر شده</span></td>-->
                                            <td>{{abstract}}</td>
                                            <td>{{detail}}</td>
                                            <td>{{keyword}}</td>
                                            <td>{{author}} </td>
                                            <td>{{image}}</td>
                                            <td>{{key_imagearticle}}</td>
                                            <td>{{date}}</td>
                                            <td>

                                                <div class="row">
                                                    <i class="  fa fa-edit  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>219555</td>
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
                                            <td>نویسنده مقاله</td>
                                            <td>فایل</td>
                                            <td>15278.jpg</td>
                                            <td>219555</td>
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
                                            <td>نویسنده مقاله</td>
                                            <td>فایل</td>
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
                                            <td>نویسنده مقاله</td>
                                            <td>فایل</td>
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
        name: "show_article",
        data(){
            return{
                title: null,
                key_titlearticle: null,
                abstract: null,
                image: null,
                key_imagearticle: null,
                detail: null,
                keyword: null,
                author: null,
                file:null,
                date: null,
            }
        },
        created(){
            axios.get('http://localhost:3000/api/v1/admin/article')
                .then((res)=>{
                    console.log(res.data)
                    const data=res.data;
                    this.title=data.title
                    this.key_titlearticle=data.key_titlearticle
                    this.abstract=data.abstract
                    this.image=data.image
                    this.key_imagearticle=data.key_imagearticle
                    this.detail=data.detail
                    this.keyword=data.keyword
                    this.author=data.author
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
        methods:{

        },

    }
</script>

<style scoped>
   .container-fluid .animated .row .card{
        overflow-x: hidden;
        overflow-y: hidden;
    }


    @font-face {
        font-family: IRANSansWeb;
        src: url("../../../public/bootstrap/font/fonts/IRANSansWeb(FaNum).ttf");
        /*src: url("../../../public/bootstrap/font/fontss/fonts/Yekan.otf") format("woff"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("woff"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("truetype");*/
        font-weight: normal; }

    .card-body .table th{
        font-size: 12px;
    }
   h3,th,td,input{
       font-family: IRANSansWeb;
   }
</style>