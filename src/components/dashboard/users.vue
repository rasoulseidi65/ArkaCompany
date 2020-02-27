<template>

        <div style="margin-left: 12em">
            <div class="container-fluid">
                <div class="animated fadeIn">
                    <div class="row" style="margin-top:8em;">
                        <div>
                            <div class="card" style="width: 70em">
                                <div class="card-header" style="background-color: #00003b;color: white">
                                    <h3 class="card-title text-right">نمایش کاربران</h3>

                                    <div class="card-tools">
                                        <div class="input-group input-group-sm float-left w-25" style="width: 150px;bottom: 3em">
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
                                            <th>کد </th>
                                            <th>نام کاربری</th>
                                            <th class="pr-2"> ایمیل</th>
                                            <th>رمز عبور</th>
                                            <th>تلفن</th>
                                            <th>آدرس</th>
                                            <th>نوع کاربر</th>
                                            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>{{name}}</td>
                                            <td>{{email}}</td>
                                            <!--<td><span class="badge badge-success">منتشر شده</span></td>-->
                                            <td>{{password}}</td>
                                            <td>{{phone}}</td>
                                            <td>{{address}}</td>
                                            <td>{{type}}</td>
                                            <td>

                                                <div class="row">
                                                    <i class="  fa fa-edit  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>مریم</td>
                                            <td>mary@gmail.com</td>
                                            <!--<td><span class="badge badge-success">منتشر شده</span></td>-->
                                            <td>*****</td>
                                            <td>09121111111</td>
                                            <td>جنت آباد،شاهین شمالی،شاهین4</td>
                                            <td>کاربر عادی</td>
                                            <td>

                                                <div class="row">
                                                    <i class="  fa fa-edit  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>مریم</td>
                                            <td>mary@gmail.com</td>
                                            <!--<td><span class="badge badge-success">منتشر شده</span></td>-->
                                            <td>*****</td>
                                            <td>09121111111</td>
                                            <td>جنت آباد،شاهین شمالی،شاهین4</td>
                                            <td>کاربر عادی</td>
                                            <td>

                                                <div class="row">
                                                    <i class="  fa fa-edit  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>مریم</td>
                                            <td>mary@gmail.com</td>
                                            <!--<td><span class="badge badge-success">منتشر شده</span></td>-->
                                            <td>*****</td>
                                            <td>09121111111</td>
                                            <td>جنت آباد،شاهین شمالی،شاهین4</td>
                                            <td>کاربر عادی</td>
                                            <td>

                                                <div class="row">
                                                    <i class="  fa fa-edit  ml-2"></i>
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
        name: "users",
        data(){
            return{
                allUsers:[],
                email:'',
                name:'',
                password:'',
                phone:'',
                address:'',
                type:''
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
        methods:{
            // getUsers(){
            //     this.$http.get('/user').then(
            //         response=>{
            //             this.allUsers=response.body
            //         },error=>{
            //             console.log(error)
            //     }
            //     )
            // }
        },
        created() {
            axios.get('http://localhost:3000/api/v1/admin/user')
                .then((res)=>{
                    console.log(res.data)
                    const data= res.data;
                    this.email=data.email
                })
                .catch((err)=>{
                    console.log(err)
                })
        }
    }
</script>

<style scoped>

    @font-face {
        font-family: IRANSansWeb;
        src: url("../../../public/bootstrap/font/fonts/IRANSansWeb(FaNum)_Medium.ttf");
        /*src: url("../../../public/bootstrap/font/fontss/fonts/Yekan.otf") format("woff"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("woff"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("truetype");*/
        font-weight: normal; }



    #btn1{
        color: white;
        border-radius: 30px;

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
    h3,th,td,input{
        font-family: IRANSansWeb;
    }
</style>