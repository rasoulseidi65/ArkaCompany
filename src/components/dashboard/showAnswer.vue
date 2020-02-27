<template>

        <div>
            <div class="container-fluid">
                <div class="animated fadeIn">
                    <div class="row">
                        <div class="">
                            <div class="card" style="margin-top: 8rem;width:70rem;margin-left: 5rem">
                                <div class="card-header" style="background-color: #00003b;color: white">
                                    <h3 class="card-title text-right">نمایش پاسخ ها</h3>

                                    <div class="card-tools">
                                        <div class="input-group input-group-sm float-left w-25" style="bottom: 3em;width: 150px;">
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
                                            <th>کد</th>
                                            <th>نام کاربر</th>
                                            <th>آی دی نظر</th>
                                            <th>پاسخ مربوطه</th>
                                            <th>تایید شده/عدم تایید</th>
                                            <th></th>


                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>{{name}}</td>
                                            <td>{{comment_id}}</td>
                                            <td>{{answer}}</td>
                                            <td><span class="badge badge-success">{{active}}</span></td>
                                            <td>

                                                <div class="row">
                                                    <i class="  fa fa-reply  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>مریم</td>
                                            <td>1</td>
                                            <td>ممنون از نظر شما</td>
                                            <td><span class="badge badge-success">تایید شده</span></td>
                                            <td>

                                                <div class="row">
                                                    <i class="  fa fa-reply  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>مریم</td>
                                            <td>1</td>
                                            <td>ممنون از نظر شما</td>
                                            <td><span class="badge badge-success">تایید شده</span></td>
                                            <td>

                                                <div class="row">
                                                    <i class="  fa fa-reply  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
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
        name: "comment",
        data(){
            return{
                name:null,
                comment_id:null,
                answer:null,
                active:null
            }
        },
        created(){
            axios.get('http://localhost:3000/api/v1/admin/answer')
                .then((res)=>{
                    console.log(res.data)
                    const data=res.data;
                    this.name=data.name
                    this.comment_id=data.comment_id
                    this.answer=data.answer
                    this.active=data.active
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