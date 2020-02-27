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
                    <div class="row" style="margin-top:5em;">
                        <div class="card card-warning shadow-lg mb-5"  style="width: 60em">
                            <div class="card-header " style="background-color: #00003b;color: white">
                                <h3 class="card-title text-right">اسلایدر</h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <form @submit.prevent="onSubmit">
                                    <!-- text input -->
                                    <div class="form-group ">
                                        <label class="float-right">عنوان</label>
                                        <input v-model="title" name="title" id="title" type="text" class="form-control" placeholder="عنوان...">
                                    </div>



                                <!-- textarea -->
                                <div class="form-group ">
                                    <label class="float-right">جزییات</label>
                                    <textarea v-model="detail" name="detail" id="detail" class="form-control" rows="3" placeholder="جزییات ..."></textarea>
                                    <br>
                                    <label class="float-right">لینک</label>
                                    <input v-model="link" name="link" id="link" type="text" class="form-control" placeholder="لینک...">
                                </div>

                                <br>
                                <label for="exampleInputFile" class="float-right">ارسال تصویر</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="exampleInputFile">
                                        <label class="custom-file-label" for="exampleInputFile">انتخاب تصویر</label>
                                    </div>
                                    <div class="input-group-append">
                                        <span class="input-group-text" id="">Upload</span>
                                    </div>
                                </div>
                                <br>
                                <label class="float-right">کلید واژه تصویر</label>
                                <input v-model="key_image" name="key_image" id="key_image" type="text" class="form-control" placeholder="کلیدواژه تصویر...">
                                <br>
                                <div class="row ">
                                    <div class="col-sm-8"></div>
                                    <div class="col-sm-2"></div>
                                    <div class="col-sm-2">
                                        <button type="submit" class="  btn btn-block btn-success mb-2" id="btn1">&nbsp; ثبت&nbsp;&nbsp;
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
    export default {
        name: "add_news",
        data() {
            return {

                title:null,
                detail:null,
                link:null,
                image:null,
                key_image:null,
                res_success:false,
                res_field:false,
                resultData:null,
                errors:[],
                result:null,


            }


        },
        methods:{
            onSubmit(){
                const formData={
                    subject:this.subject,
                    detail: this.detail,
                    link: this.link,
                    key_image: this.key_image,
                }
                console.log(formData)
                axios.post('http://localhost:3000/api/v1/admin/header',formData)
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
        font-weight: normal; }
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