const Home=resolve =>{
    require.ensure(['./components/home/Home'],()=>{
        resolve(require('./components/home/Home'));
    })
}
const Sample=resolve =>{
    require.ensure(['./components/work_samples/Sample'],()=>{
        resolve(require('./components/work_samples/Sample'));
    })
}
const Service=resolve =>{
    require.ensure(['./components/service/Service'],()=>{
        resolve(require('./components/service/Service'));
    })
}
const Product=resolve =>{
    require.ensure(['./components/products/Product'],()=>{
        resolve(require('./components/products/Product'));
    })
}
const Team=resolve =>{
    require.ensure(['./components/team/Team'],()=>{
        resolve(require('./components/team/Team'));
    })
}
const App=resolve =>{
    require.ensure(['./components/work_samples/App'],()=>{
        resolve(require('./components/work_samples/App'));
    })
}
const website=resolve =>{
    require.ensure(['./components/work_samples/website'],()=>{
        resolve(require('./components/work_samples/website'));
    })
}
const Contact=resolve =>{
    require.ensure(['./components/contact/Contact'],()=>{
        resolve(require('./components/contact/Contact'));
    })
}
const  Sign_in=resolve =>{
    require.ensure(['./components/sign_in/Sign_in'],()=>{
        resolve(require('./components/sign_in/Sign_in'));
    })
}
const  Sign_up=resolve =>{
    require.ensure(['./components/sign-up/Sign_up'],()=>{
        resolve(require('./components/sign-up/Sign_up'));
    })
}
const  detailNews=resolve =>{
    require.ensure(['./components/home/detailNews'],()=>{
        resolve(require('./components/home/detailNews'));
    })
}
const detailArticle=resolve =>{
    require.ensure(['./components/home/detailArticle'],()=>{
        resolve(require('./components/home/detailArticle'));
    })
}
const about=resolve =>{
    require.ensure(['./components/about_us/about'],()=>{
        resolve(require('./components/about_us/about'));
    })
}
const index=resolve =>{
    require.ensure(['./components/dashboard/index'],()=>{
        resolve(require('./components/dashboard/index'));
    })
}
const add_product=resolve =>{
    require.ensure(['./components/dashboard/add_product'],()=>{
        resolve(require('./components/dashboard/add_product'));
    })
}
const add_article=resolve =>{
    require.ensure(['./components/dashboard/add_article'],()=>{
        resolve(require('./components/dashboard/add_article'));
    })
}
const show_article=resolve =>{
    require.ensure(['./components/dashboard/show_article'],()=>{
        resolve(require('./components/dashboard/show_article'));
    })
}
const show_product=resolve =>{
    require.ensure(['./components/dashboard/show_product'],()=>{
        resolve(require('./components/dashboard/show_product'));
    })
}
const add_news=resolve =>{
    require.ensure(['./components/dashboard/add_news'],()=>{
        resolve(require('./components/dashboard/add_news'));
    })
}
const show_news=resolve =>{
    require.ensure(['./components/dashboard/show_news'],()=>{
        resolve(require('./components/dashboard/show_news'));
    })
}
const answer=resolve =>{
    require.ensure(['./components/dashboard/answer'],()=>{
        resolve(require('./components/dashboard/answer'));
    })
}
const comment=resolve =>{
    require.ensure(['./components/dashboard/comment'],()=>{
        resolve(require('./components/dashboard/comment'));
    })
}
const users=resolve =>{
    require.ensure(['./components/dashboard/users'],()=>{
        resolve(require('./components/dashboard/users'));
    })
}
const showAnswer=resolve =>{
    require.ensure(['./components/dashboard/showAnswer'],()=>{
        resolve(require('./components/dashboard/showAnswer'));
    })
}
const slider=resolve =>{
    require.ensure(['./components/dashboard/slider'],()=>{
        resolve(require('./components/dashboard/slider'));
    })
}
const News=resolve =>{
    require.ensure(['./components/home/News'],()=>{
        resolve(require('./components/home/News'));
    })
}
// const product=resolve =>{
//     require.ensure(['./components/dashboard/product'],()=>{
//         resolve(require('./components/dashboard/product'));
//     })
// }
// const news=resolve =>{
//     require.ensure(['./components/dashboard/news'],()=>{
//         resolve(require('./components/dashboard/news'));
//     })
// }
// const article=resolve =>{
//     require.ensure(['./components/dashboard/article'],()=>{
//         resolve(require('./components/dashboard/article'));
//     })
// }

// import Home from "./components/home/Home";
// import Service from "./components/service/Service";
// import Product from "./components/products/Product";
// import Sample from "./components/work_samples/Sample";
// import Team from "./components/team/Team";
// import App from "./components/work_samples/App";
// import website from "./components/work_samples/website";
// import Contact from "./components/contact/Contact";
// import Sign_in from "./components/sign_in/Sign_in";
// import Sign_up from "./components/sign-up/Sign_up";
// import detailNews from "./components/home/detailNews";
// import detailArticle from "./components/home/detailArticle";

// import  about from "./components/about_us/about";
// import test from "./components/test";
// import index from "./components/dashboard/index";
// import add_product from "./components/dashboard/add_product";
// import add_article from "./components/dashboard/add_article";
// import show_article from "./components/dashboard/show_article";
// import show_product from "./components/dashboard/show_product";
// import add_news from "./components/dashboard/add_news";
// import show_news from "./components/dashboard/show_news";
// import answer from "./components/dashboard/answer";
// import comment from "./components/dashboard/comment";
// import users from "./components/dashboard/users";
// import showAnswer from "./components/dashboard/showAnswer";
// import slider from "./components/dashboard/slider";
// import News from "./components/home/News";




export const routes=[
    {path:'/',component:Home,name:'home'},
    {path:'/#news',component:News},
    {path:'/service',component:Service},
    {path:'/product',component:Product},
    {path:'/sample',component:Sample},
    {path:'/team',component:Team},
    {path:'/app',component:App},
    {path:'/contact',component:Contact},
    {path:'/sign_in',component:Sign_in},
    {path:'/sign_up',component:Sign_up},
    {path:'/website',component:website},
    {path:'/detailNews',component:detailNews},
    {path:'/detailArticle',component:detailArticle},
    {path:'*',redirect:{name:'home'}},
    {path:'/about',component:about},
    // {path:'/test',component:test},
    {path:'/index',component:index,name:'index',children:[

           {path:'/product/add_product',component:add_product,name:'add_product'},
           {path:'/product/show_product',component:show_product,name:'show_product'},
          {path:'/article/add_article',component:add_article,name:'add_article'},
          {path:'/article/show_article',component:show_article,name:'show_article'},
           {path:'/news/add_news',component:add_news,name:'add_news'},
          {path:'/news/show_news',component:show_news,name:'show_news'},
            {path:'/index/answer',component:answer,name:'answer'},
            {path:'/index/showAnswer',component:showAnswer,name:'showAnswer'},
            {path:'/index/comment',component:comment,name:'comment'},
            {path:'/index/users',component:users,name:'users'},
            {path:'/index/slider',component:slider,name:'slider'},
        ]},
   //  {path:'/index',component:index},
   // {path:'/add_product',component:add_product,name:'add_product'},
   // {path:'/show_product',component:show_product,name:'show_product'},
   // {path:'/add_article',component:add_article,name:'add_article'},
   // {path:'/show_article',component:show_article,name:'show_article'},
   // {path:'/add_news',component:add_news,name:'add_news'},
   // {path:'/show_news',component:show_news,name:'show_news'},
   // {path:'/answer',component:answer,name:'answer'},
   // {path:'/showAnswer',component:showAnswer,name:'showAnswer'},
   // {path:'/comment',component:comment,name:'comment'},
   // {path:'/users',component:users,name:'users'},
   // {path:'/slider',component:slider,name:'slider'}
]

