<template>
            <!-- Main content -->
            <div  class="mb-5" style="margin-left: 18em;margin-top: 8em">
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
                        <div class="row">
                            <div class="card card-warning shadow-lg" style="width: 60em">
                                <div class="card-header w-100" style="background-color: #00003b;color: white">
                                    <h3 class="card-title float-right">مقاله جدید</h3>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <form @submit.prevent="onSubmit">
                                        <!-- text input -->
                                        <div class="form-group">
                                            <label class="float-right">عنوان مقاله</label>
                                            <input v-model="title" name="title" id="title" type="text"
                                                   class="form-control" placeholder="عنوان مقاله...">
                                            <br>
                                            <label class="float-right">کلید واژه عنوان مقاله</label>
                                            <input v-model="key_titlearticle" name="key_titlearticle" id="key_titlearticle" type="text"
                                                   class="form-control" placeholder="کلیدواژه عنوان مقاله...">
                                        </div>


                                        <!-- textarea -->
                                        <div class="form-group shadow-sm">
                                            <label class="float-right"> خلاصه مقاله</label>
                                            <textarea v-model="abstract" name="abstract" id="abstract" class="form-control"
                                                      rows="3" placeholder="خلاصه مقاله..."></textarea>
                                        </div>

                                        <br>
                                        <label for="exampleInputFile" class="float-right">ارسال تصویر</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input type="file" ref="file" v-on:change="handleFileUpload()" class="custom-file-input" id="exampleInputFile">
                                                <label class="custom-file-label float-right" for="exampleInputFile">انتخاب
                                                    تصویر</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text" id="">Upload</span>
                                            </div>
                                        </div>
                                        <br>
                                        <label class="float-right">کلید واژه تصویر</label>
                                        <input v-model="key_imagearticle" name="key_imagearticle" id="key_imagearticle" type="text"
                                               class="form-control" placeholder="کلیدواژه تصویر...">
                                        <br>
                                        <div class="card" style="border-color:wheat;border-width: 2px">
                                            <div class="mt-3 ml-5">
                                                <label for="exampleInputFile" class="float-right"> متن مقاله</label>
                                            </div>
                                            <div>
                                                <ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                                            </div>
                                        </div>
                                        <label class="float-right mt-2">کلید واژه متن مقاله</label>
                                        <input v-model="keyword" name="keyword" id="keyword" type="text"
                                               class="form-control" placeholder="کلیدواژه متن مقاله...">
                                        <br>
                                        <label class="float-right">نویسنده مقاله</label>
                                        <input v-model="author" name="author" id="author" type="text"
                                               class="form-control" placeholder="نویسنده مقاله...">
                                        <br>
<!--                                        <label class="float-right">فایل</label>-->
<!--                                        <input type="file" class="form-control">-->
<!--                                        <br>-->
                                        <label class="float-right">تاریخ</label>
                                        <input v-model="date"  name="date" id="date"  type="date" class="form-control" placeholder="">


                                        <div class="row ">
                                            <div class="col-sm-8"></div>
                                            <div class="col-sm-2">
                                                <button type="submit" class=" btn btn-block btn-primary mb-2 mt-3 ml-1 "
                                                        id="btn2">
                                                    &nbsp;ویرایش &nbsp;&nbsp;
                                                </button>
                                            </div>
                                            <div class="col-sm-2">
                                                <button type="submit" class="  btn btn-block btn-success mb-2 mt-3"
                                                        id="btn1">&nbsp; ثبت مقاله&nbsp;&nbsp;
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
    import axios from 'axios'
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';





    export default {
        name: "add_article",
        components:{

        },

        data() {
            return {
                errors: [],
                result: null,
                title: null,
                key_titlearticle: null,
                abstract: null,
                image: null,
                key_imagearticle: null,
                detail: null,
                keyword: null,
                author: null,
                // file:null,
                date: null,
                res_success: false,
                res_field: false,
                resultData: null,
                file:'',
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }

            }
        },

        methods: {

            handleFileUpload(){
                this.file = this.$refs.file.files[0];
            },
            onSubmit() {



                /*
                    Add the form data we need to submit
                */
                formData.append('file', this.file);

                /*
                  Make the request to the POST /single-file URL
                */
                axios.post( '/single-file',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(){
                    console.log('SUCCESS!!');
                })
                    .catch(function(){
                        console.log('FAILURE!!');
                    });


                const formData = {
                    title: this.title,
                    keyword: this.keyword,
                    abstract: this.abstract,
                    key_imagearticle: this.key_imagearticle,
                     detail: this.detail,
                    key_titlearticle: this.key_titlearticle,
                    author: this.author,
                    date: this.date

                }
                console.log(formData)
                axios.post('http://localhost:3000/api/v1/admin/article', formData)
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



    h3,label,button,input,textarea{
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