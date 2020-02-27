<template>

            <div style="margin-left: 20em">
                <div v-if="res_success">
                    <div class="alert alert-success" role="alert" >
                        {{resultData}}
                    </div>
                </div>
                <div v-if="res_field">
                    <div class="alert alert-danger" role="alert" >
                        {{resultData}}
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="animated fadeIn">
                        <div class="row"  style="margin-top:5em;">
                            <div class="card card-warning shadow-lg mb-5">
                                <div class="card-header " style="background-color: #00003b;color: white">
                                    <h3 class="card-title text-right">خبر جدید</h3>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <form>
                                        <!-- text input -->
                                        <div class="form-group ">
                                            <div class="form-group">
                                                <label class="float-right">گروه خبری</label>
                                                <select class="form-control">
                                                    <option>سیاسی</option>
                                                    <option>اقتصادی</option>
                                                    <option>فرهنگی</option>
                                                    <option>اموزشی</option>
                                                    <option>متفرقه</option>
                                                </select>
                                            </div>
                                            <label class="float-right">عنوان خبر</label>
                                            <input v-model="title" name="title" id="title" type="text" class="form-control" placeholder="عنوان خبر...">
                                            <br>
                                            <label class="float-right">کلید واژه عنوان خبر</label>
                                            <input v-model="key_titlenews" name="key_titlenews" id="key_titlenews" type="text" class="form-control" placeholder="کلیدواژه عنوان خبر...">
                                        </div>


                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label class="float-right"> خلاصه خبر</label>
                                            <textarea v-model="short_news" name="short_news" id="short_news" class="form-control" rows="3"
                                                      placeholder="خلاصه خبر ..."></textarea>
                                        </div>

                                        <br>
                                        <label for="exampleInputFile" class="float-right">ارسال تصویر</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" id="exampleInputFile">
                                                <label class="custom-file-label" for="exampleInputFile">انتخاب
                                                    تصویر</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="">Upload</span>
                                            </div>
                                        </div>
                                        <br>
                                        <label class="float-right">کلید واژه تصویر</label>
                                        <input v-model="key_imagenews" name="key_imagenews" id="key_imagenews" type="text" class="form-control" placeholder="کلیدواژه تصویر...">
                                        <br>
                                        <div class="card" style="border-color:wheat;border-width: 2px">
                                            <div class="card-header" style="background-color:lightgoldenrodyellow">
                                                <label for="exampleInputFile" class="float-right"> متن خبر</label>
                                            </div>
                                            <div>
                                                <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                                            </div>
                                        </div>
                                        <label class="float-right mt-2">کلید واژه متن خبر</label>
                                        <input v-model="key_news" name="key_news" id="key_news"  type="text" class="form-control" placeholder="کلیدواژه متن خبر...">


                                        <label class="float-right mt-2">تاریخ</label>
                                        <input v-model="date"  name="date" id="date"  type="date" class="form-control" placeholder="">


                                        <div class="row ">
                                            <div class="col-sm-8"></div>
                                            <div class="col-sm-2">
                                                <button type="submit" class=" btn btn-block btn-primary mb-2 ml-1 mt-5 "
                                                        id="btn2">
                                                    &nbsp;ویرایش&nbsp;&nbsp;
                                                </button>
                                            </div>
                                            <div class="col-sm-2">
                                                <button type="submit" class="  btn btn-block btn-success mb-2 mt-5"
                                                         id="btn1">&nbsp; ثبت خبر&nbsp;&nbsp;
                                                </button>
                                            </div>

                                        </div>
                                    </form>
                                </div><!-- /.end card-body -->
                            </div>
                        </div>
                        <!--/.row-->
                    </div>

                </div>
                <!-- /.conainer-fluid -->
            </div>

</template>

<script>
    import axios from "axios"
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default {
        name: "add_news",
        data() {
            return {
                errors: [],
                result: null,
                title: null,
                key_titlenews: null,
                short_news: null,
                image_news: null,
                group_news:null,
                key_imagenews: null,
                detail_news: null,
                key_news: null,
                date: null,
                res_success: false,
                res_field: false,
                resultData: null,
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }
            }
        },
        methods: {
            onSubmit() {
                const formData = {
                    title: this.title,
                    key_titlenews: this.key_titlenews,
                    short_news: this.short_news,
                    key_imagenews: this.key_imagenews,
                    detail_news: this.detail_news,
                    key_news: this.key_news,
                    date: this.date

                }
                console.log(formData)
                axios.post('http://localhost:3000/api/v1/admin/news', formData)
                    .then((res) => {
                        this.resultData = res.data['data'];
                        this.result = res.data['success'];
                        if (this.result == true) {
                            this.res_success = true;
                            this.res_field = false;

                        } else {
                            this.res_success = false;
                            this.res_field = true;

                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }
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
        font-weight: normal;
    }

    h3,label,button,input,textarea,select{
        font-family: IRANSansWeb;
    }

    #btn1{
        color: white;
        border-radius: 30px;
        background-color: #0a360a;

    }

    #btn1:hover {
        background-color: rgba(7, 59, 9, 0.9);
    }

    #btn2 {
        color: white;
        border-radius: 30px;
        background-color: #00003b;
    }

    #btn2:hover {
        background-color: rgba(0, 0, 59, 0.91);
    }
</style>