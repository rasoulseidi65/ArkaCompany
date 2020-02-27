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
                <div class="container-fluid" >
                    <div class="animated fadeIn">
                        <div class="row"  style="margin-top:5em;">
                            <div class="card card-warning shadow-lg mt-3 mb-5"
                                 style="width: 60em">
                                <div class="card-header " style="background-color: #00003b;color: white">
                                    <h3 class="card-title text-right">ثبت محصول</h3>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body">
                                    <form @submit.prevent="onSubmit">
                                        <!-- text input -->
                                        <div class="form-group ">
                                            <label class="float-right">عنوان محصول</label>
                                            <input v-model="title" name="title" id="title" type="text"
                                                   class="form-control" placeholder="عنوان محصول...">
                                            <br>
                                            <label class="float-right">نام محصول</label>
                                            <input v-model="name" name="name" id="name" type="text" class="form-control"
                                                   placeholder="نام محصول...">
                                        </div>


                                        <!-- textarea -->
                                        <div class="form-group">
                                            <label class="float-right"> جزییات محصول</label>
                                            <textarea v-model="detail" name="detail" id="detail" class="form-control"
                                                      rows="3" placeholder="جزییات محصول ..."></textarea>
                                        </div>

                                        <br>
                                        <label for="exampleInputFile" class="float-right">ارسال تصویر</label>
                                        <div class="input-group">
                                            <div class="custom-file">
                                                <input  name="file" type="file"  ref="file" v-on:change="handleFileUpload()"
                                                       class="custom-file-input" id="exampleInputFile">
                                                <label class="custom-file-label" for="exampleInputFile">انتخاب
                                                    تصویر</label>
                                            </div>
                                            <div class="input-group-append">
                                                <span class="input-group-text" v-on:click="submitFile()">Upload</span>
                                            </div>
                                        </div>
                                        <br>
                                        <div class="card" style="border-color:wheat;border-width: 2px">
                                            <div class="card-header " style="background-color:lightgoldenrodyellow">
                                                <label for="exampleInputFile" class="float-right mb-2"> متن </label>
                                            </div>
                                            <divc>
                                                <ckeditor  :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
                                            </divc>
                                        </div>
                                        <div class="row ">
                                            <div class="col-sm-8"></div>
                                            <div class="col-sm-2">
                                                <button type="submit" class="btn btn-block btn-primary mb-2 ml-1 mt-5"
                                                        id="btn2">
                                                    &nbsp;ویرایش&nbsp;&nbsp;
                                                </button>
                                            </div>
                                            <div class="col-sm-2">
                                                <button type="submit" class="btn btn-block btn-success mb-2 mt-5"
                                                        id="btn1">&nbsp; ثبت محصول&nbsp;&nbsp;
                                                </button>
                                            </div>
                                        </div>

                                    </form><!-- /.end card-body -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <!--/.row-->
                </div>


        <!-- /.conainer-fluid -->
            </div>
</template>

<script>
    import axios from "axios"
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    export default {
        name: "add_product",

        data() {
            return {
                errors:[],
                result:null,
                title:null,
                name:null,
                detail:null,
                description:null,
                res_success:false,
                res_field:false,
                resultData:null,
                file:null,
                editor: ClassicEditor,
                editorData: '<p>Content of the editor.</p>',
                editorConfig: {
                    // The configuration of the editor.
                }


            }
        },
        methods:{
            handleFileUpload(){
                this.file = this.$refs.file.files[0];
            },
            submitFile(){
                let formData = new FormData();

                /*
                    Add the form data we need to submit
                */
                formData.append('image', this.file);

                // console.log(this.file)
                /*
                  Make the request to the POST /single-file URL
                */
                axios.post( 'http://localhost:3000/api/v1/admin/image',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(response){
                    console.log(response.data['data']);
                    this.file=response.data['data'];
                })
                    .catch(function(err){
                        console.log(err);
                    });


            },
            onSubmit(){



                const formData={
                    title:this.title,
                    name:this.name,
                    detail:this.detail,
                    description: this.description,
                    file:this.file,


                }
                console.log(formData)
                axios.post('http://localhost:3000/api/v1/admin/product',formData)
                    .then((res)=>{
                        this.resultData=res.data['data'];
                        this.result=res.data['success'];
                        if (this.result==true){
                            this.res_success=true;
                            this.res_field=false;

                        }
                        else
                        {
                            this.res_success=false;
                            this.res_field=true;

                        }
                    })
                    .catch((err)=>{
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

    .container-fluid {
        width: 100%;
        margin-right: auto;
        margin-left: auto;
        padding-right: 15px;
        padding-left: 15px;
        width: 100%; }


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