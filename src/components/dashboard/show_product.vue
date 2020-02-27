<template>
        <div>
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
                        <div>
                            <div class="card mb-5" style="margin-top: 8rem;width:70rem;margin-left: 5rem">
                                <div class="card-header" style="background-color: #00003b;color: white">
                                    <h3 class="card-title text-right">نمایش محصولات</h3>
                                        <div class="card-tools">
                                            <div class="input-group input-group-sm float-left w-25 " style="width: 150px;bottom: 3em">
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
                                            <th >کد محصول</th>
                                            <th>عنوان محصول</th>
                                            <th> نام محصول</th>
                                            <th>جزییات محصول</th>
                                            <th>تصویر محصول</th>
                                            <th>متن محصول</th>
                                            <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</th>

                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>{{title}}</td>
                                            <td>{{name}}</td>
                                            <td>{{detail}}</td>
                                            <td>{{file}}</td>
                                            <td>{{description}}</td>
                                            <td>
                                                <div class="row">
                                                    <i class="  fa fa-edit  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>هوش مصنوعی</td>
                                            <td>سیستم تشخیص دود</td>
                                            <td>جزییات</td>
                                            <td>15278.jpg</td>
                                            <td>متن</td>
                                            <td>
                                                <div class="row">
                                                    <i class="  fa fa-edit  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr  class="text-right">
                                            <td>1835555</td>
                                            <td>هوش مصنوعی</td>
                                            <td>سیستم تشخیص دود</td>
                                            <td>جزییات</td>
                                            <td>15278.jpg</td>
                                            <td>متن</td>
                                            <td>
                                                <div class="row">
                                                    <i class="  fa fa-edit  ml-2"></i>
                                                    <i class="  fa fa-trash-o"></i>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr class="text-right">
                                            <td>1835555</td>
                                            <td>هوش مصنوعی</td>
                                            <td>سیستم تشخیص دود</td>
                                            <td>جزییات</td>
                                            <td>15278.jpg</td>
                                            <td>متن</td>
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
        name: "show_product",
        data(){
            return{
                title:null,
                name:null,
                detail:null,
              description:null,
                file:null,
                res_success:false,
                res_field:false,
                resultData:null,
            }
        },
        created(){
          axios.get('http://localhost:3000/api/v1/admin/product')
              .then((res)=>{
                  console.log(res.data)
                  const data=res.data;
                  this.title=data.title
                  this.name=data.name
                  this.detail=data.detail
                  this.description=data.description
                  this.file=data.file
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
    .container-fluid .animated .row .card{
        overflow-x: hidden;
        overflow-y: hidden;
    }
    @font-face {
        font-family: IRANSansWeb;
        src: url("../../../public/bootstrap/font/fonts/IRANSansWeb(FaNum).ttf");
        /*src: url("../../../public/bootstrap/font/fontss/fonts/Yekan.otf") format("woff"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("woff"), url("../../../public/bootstrap/font/fontss/fonts/Yekan.woff") format("truetype");*/
        font-weight: normal; }
    h3,th,td,input{
        font-family: IRANSansWeb;
    }
</style>