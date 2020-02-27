<template>

        <div  style="margin-left: 20em">
            <div class="container-fluid">
                <div class="animated fadeIn">
                    <div class="row"  style="margin-top:5em;">
                        <div class="card card-warning shadow-lg mb-5" style="width: 60em;">
                            <div class="card-header " style="background-color: #00003b;color: white">
                                <h3 class="card-title text-right">پاسخ به نظرات</h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <form @submit.prevent="onSubmit">
                                    <!-- text input -->
                                    <div class="form-group ">
                                        <label class="float-right">نام</label>
                                        <input v-model="name"  name="name" id="name" type="text" class="form-control" placeholder="نام...">
                                    </div>



                                <!-- textarea -->
                                <div class="form-group">
                                    <label class="float-right"> پاسخ ادمین</label>
                                    <textarea v-model="replay"  name="replay" id="replay" class="form-control" rows="3" placeholder="پاسخ ..."></textarea>
                                </div>

                                <br>
                                <div class="form-group">
                                    <label class="float-right">کد نظر</label>
                                    <input v-model="comment_Id"  name="comment_Id"  type="number" class="form-control" placeholder="">
                                    <br>
                                    <label class="float-right">تاریخ</label>
                                    <input v-model="date"  name="date" id="date"  type="date" class="form-control" placeholder="">
                                    <br>
                                    <label class="float-right">ساعت</label>
                                    <input v-model="time"  name="time" id="time"  type="date" class="form-control" placeholder="">
                                </div>


                                <div class="row ">
                                    <div class="col-sm-8"></div>
                                    <div class="col-sm-2"></div>
                                    <div class="col-sm-2">
                                        <button type="submit" class="  btn btn-block btn-success mb-2"  id="btn1" >&nbsp; ثبت&nbsp;&nbsp;
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
        name: "answer",
        data(){
            return{
                 name:null,
                replay:null,
                comment_Id:null,
                date:null,
                time:null,
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
                    name:this.name,
                    replay:this.replay,
                    comment_Id:this.comment_Id,
                    time:this.time,
                    date:this.date
                }
                // console.log(formData)
                axios.post('http://localhost:3000/api/v1/admin/answer',formData)
                    .then((res)=>{
                        console.log(res);
                        this.resultData=res.data['data'];
                        // this.result=res.data['success'];
                        // if (this.result==true){
                        //     this.res_success=true;
                        //     this.res_field=false;
                        //
                        // }
                        // else
                        // {
                        //     this.res_success=false;
                        //     this.res_field=true;
                        //
                        // }
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

        }
    }
</script>

<style scoped>

    @font-face {
        font-family: IRANSansWeb;
        src: url("../../../public/bootstrap/font/fonts/IRANSansWeb(FaNum).ttf");
        /*src: url("../../../public/bootstrap/font/fonts/IRA") format("ttf"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("woff"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("truetype");*/
        font-weight: normal; }



 h3,label,button{
     font-family: IRANSansWeb;
 }
    #btn1{
        color: white;
        border-radius: 30px;
        background-color: #0a360a;

    }
    #btn1:hover{
        background-color: rgba(7, 59, 9, 0.9);
    }
    #btn2{
        color: white;
        border-radius: 30px;
    }
    #btn2:hover{
        background-color: rgba(11, 59, 19, 0.91);
    }
</style>