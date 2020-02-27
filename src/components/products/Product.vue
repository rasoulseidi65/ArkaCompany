<template>
    <div>
        <Header></Header>
        <div style="margin-top: 10em">
            <div class="content">
                <div class="row">
                    <div class=" col-md-6 col-lg-6 col-sm-6  mt-5">
                        <img  class="ser float-right mr-3 wow fadeInLeft" src="../../assets/img/23.png" alt="" style="width: 30rem" id="img">

                    </div>
                    <div class="  col-md-6 col-lg-6 col-sm-6 mt-5  ">
                        <h4 class=" a mt-5 float-right mr-5  " style=""> طراحی  سایت</h4>
                        <p  class="a text-muted float-right text-right pr-5" dir="rtl" >
                            با ظهور تکنولوژی Web 2.0، تنها داشتن وب سایت کافی نیست. وب سایت شما نیاز به کاربر پسندی، و بهینه سازی برای موتورهای جستوگر را دارد. مهارت تیم طراحان ما، خلق وب سایت هایی است که نگاه ها را بسوی شما معطوف و رضایت مشتریان را برآورده می سازد.

                        </p>
                    </div>
                </div>
                <div class="row">
                    <div class=" col-md-6 col-lg-6 col-sm-6  mt-5">
                        <h4 class=" a mt-5 float-right mr-5 " style=""> طراحی و ساخت اپلیکیشن</h4>
                        <p class=" a float-right mr-5 text-muted mt-2" >
                            طراحی و ساخت اپلیکیشن موبایل دیگر سوال نیست. سوال این است که چگونه باید آن را به درستی انجام بدید
                        </p>
                    </div>


                    <div class="col-md-6 col-lg-6 col-sm-6 mt-5">
                        <img  class=" ml-5 wow fadeInRight" src="../../assets/img/24.jpg" alt="" style="width: 35rem" id="img">

                    </div>
                </div>
                <div class="flex-container" dir="rtl">
                    <div class="w-25 h-15">
                        <label class="float-right"><small>نام</small></label>
                        <input type="text" class="form-control" placeholder="نام...">
                    </div>
                    <div class="w-25">
                        <label class="float-right"><small>ایمیل</small></label>
                          <input type="text" class="form-control" placeholder="ایمیل...">
                    </div>
                    <div class="w-25">
                        <label class="float-right"> <small>متن نظر</small></label>
                        <textarea class="form-control" rows="1" placeholder="متن نظر..."></textarea>
                    </div>
                    <div class="w-25 mt-3 ml-4">
                        <button type="button" class="btn btn-block btn-success mb-2 mt-3" id="btn1">
                            &nbsp; ثبت&nbsp;&nbsp;
                        </button>
                    </div>
                </div>
                <div class='col-sm-10'>

                    <ul class="comment-section">

                        <li class="comment user-comment" style="width: 90em;margin-left: -14em">

                            <div class="info"  style="margin-left: -3em">
                                <a href="#">user</a>
                                <span>4 hours ago</span>
                            </div>

                            <a class="avatar" href="#">
                                <img src="../../assets/img/avatar.jpg" width="35" alt="Profile Avatar" title="user" />
                            </a>

                            <p>Suspendisse gravida sem?</p>

                        </li>

                        <li class="comment author-comment" style="width: 90em;margin-left: -2em">

                            <div class="info"  style="margin-right: -3em">
                                <a href="#">admin</a>
                                <span>3 hours ago</span>
                            </div>

                            <a class="avatar" href="#">
                                <img src="../../assets/img/avatar.jpg" width="35" alt="Profile Avatar" title="Jack Smith" />
                            </a>

                            <p>Suspendisse gravida sem?</p>

                        </li>

                        <li class="comment user-comment" style="width: 90em;margin-left: -14em">

                            <div class="info" style="margin-left: -3em">
                                <a href="#">user</a>
                                <span>1 hour ago</span>
                            </div>

                            <a class="avatar" href="#">
                                <img src="../../assets/img/avatar.jpg" width="35" alt="Profile Avatar" title="Bradley Jones" />
                            </a>

                            <p>Suspendisse gravida sem sit amet molestie portitor?</p>

                        </li>

                        <li class="comment author-comment" style="width: 90em;margin-left: -2em;">

                            <div class="info" style="margin-right: -3em">
                                <a href="#">admin</a>
                                <span>1 hour ago</span>
                            </div>

                            <a class="avatar" href="#">
                                <img src="../../assets/img/avatar.jpg" width="35" alt="Profile Avatar" title="Jack Smith" />
                            </a>

                            <p>Suspendisse gravida sem?</p>

                        </li>

                        <li class="write-new">

                            <form action="#" method="post">

                                <textarea placeholder="Write your comment here" name="comment"  style="width: 53em;margin-left:-5em"></textarea>

                                <div>

                                    <button type="submit" style="border-radius: 30px;width: 53em;margin-right: -20em">ثبت نظر</button>
                                </div>

                            </form>

                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>

</template>

<script>
    import Header from '../../components/shared/Header'
    import Footer from '../../components/shared/Footer'
    export default {
        name: "Product",
        components: {
            Header: Header,
            Footer: Footer,
        },
    }
</script>

<style scoped>
p,h4{
    font-family: 'IRANSansWeb';
}
.flex-container {
    display: flex;
    flex-wrap: nowrap;
}

.flex-container > div {
    width: 100px;
    margin: 2px;
    text-align: center;
    line-height: 20px;
    font-size: 20px;
    font-family: 'IRANSansWeb';
}




.comment-section{
    list-style: none;
    max-width: 800px;
    width: 100%;
    margin: 50px auto;
    padding: 10px;
}

.comment{
    display: flex;
    border-radius: 3px;
    margin-bottom: 45px;
    flex-wrap: wrap;
}

.comment.author-comment{
    color:  #38795b;

}

.comment.user-comment{
    color:  #60686d;
    justify-content: flex-end;

}


.comment .info{
    width: 17%;
}

.comment.author-comment .info{
    text-align: right;
}

.comment.user-comment .info{
    order: 3;
}


.comment .info a{
    display: block;
    text-decoration: none;
    color: #656c71;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    padding: 10px 0 3px 0;
}

.comment .info span{
    font-size: 11px;
    color:  #9ca7af;
}




.comment .avatar{
    width: 8%;
}

.comment.author-comment .avatar{
    padding: 10px 18px 0 3px;
}

.comment.user-comment .avatar{
    order: 2;
    padding: 10px 3px 0 18px;
}

.comment .avatar img{
    display: block;
    border-radius: 50%;
}

.comment.author-comment .avatar img{
    float: right;
}

.comment p{
    line-height: 1.5;
    padding: 18px 22px;
    width: 50%;
    position: relative;
    word-wrap: break-word;
}

.comment.author-comment p{
    background-color:  #f3f3f3;
}

.comment.user-comment p{
    background-color:  #e2f8ff;
    order: 1;
}

.author-comment p:after{
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid #f3f3f3;
    left: -8px;
    top: 18px;
}

.user-comment p:after{
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #ffffff;
    border: 2px solid #e2f8ff;
    right: -8px;
    top: 18px;
}

.write-new{
    margin: 80px auto 0;
    width: 50%;
}

.write-new textarea{
    color:  #444;
    font: inherit;

    outline: 0;
    border-radius: 3px;
    border: 1px solid #cecece;
    background-color:  #fefefe;
    box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.06);
    overflow: auto;

    width:100%;
    min-height: 80px;
    padding: 15px 20px;
}

.write-new img{
    border-radius: 50%;
    margin-top: 15px;
}

.write-new button{
    float:right;
    background-color:  #87bae1;
    box-shadow: 1px 2px 1px 0 rgba(0, 0, 0, 0.12);
    border-radius: 2px;
    border: 0;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;

    padding: 10px 25px;
    margin-top: 18px;
}

@media (max-width: 800px){

    .comment p{
        width: 100%;
    }


    .comment.user-comment .info{
        order: 2;
        text-align: left;
    }

    .comment.user-comment .avatar{
        order: 1;
    }

    .comment.user-comment p{
        order: 3;
    }


    .comment.author-comment{
        justify-content: flex-start;
    }


    .comment-section{
        margin-top: 10px;
    }

    .comment .info{
        width: auto;
    }

    .comment .info a{
        padding-top: 15px;
    }

    .comment.user-comment .avatar,

    .comment.author-comment .avatar{
        /* padding: 15px 10px 0 18px; */
        width: auto;
    }

    .comment.user-comment p:after,
    .comment.author-comment p:after{
        width: 12px;
        height: 12px;
        top: initial;
        left: -28px;
        bottom: -6px;
    }

    .write-new{
        width: 100%;
    }
}




</style>