const express = require('express');
const router = express.Router();
const adminRouter = express.Router();

// middlewares
const apiAuth = require('./middleware/apiAuth');
const apiAdmin = require('./middleware/apiAdmin');
const { uploadImage } = require('./middleware/UploadMiddleware');



// Controllers
const { api: ControllerApi } = config.path.controllers;
const HomeController = require(`${ControllerApi}/v1/HomeController`);
const AuthController = require(`${ControllerApi}/v1/AuthController`);
const UserController = require(`${ControllerApi}/v1/UserController`);
const NewsController = require(`${ControllerApi}/v1/NewsController`);
const ProductController = require(`${ControllerApi}/v1/ProductController`);
const CommentController = require(`${ControllerApi}/v1/CommentController`);
const AnswerController = require(`${ControllerApi}/v1/AnswerController`);
const HeaderController = require(`${ControllerApi}/v1/HeaderController`);
const CardController = require(`${ControllerApi}/v1/CardController`);
const ArticleController = require(`${ControllerApi}/v1/ArticleController`);
const GroupnewsController = require(`${ControllerApi}/v1/GroupnewsController`);
const UploadController = require(`${ControllerApi}/v1/UploadController`);

// AdminController
const AdminNewsController = require(`${ControllerApi}/v1/admin/NewsController`);
const AdminUserController = require(`${ControllerApi}/v1/admin/UserController`);
const AdminProductController = require(`${ControllerApi}/v1/admin/ProductController`);
const AdminCommentController = require(`${ControllerApi}/v1/admin/CommentController`);
const AdminAnswerController = require(`${ControllerApi}/v1/admin/AnswerController`);
const AdminHeaderController = require(`${ControllerApi}/v1/admin/HeaderController`);
const AdminCardController = require(`${ControllerApi}/v1/admin/CardController`);
const AdminArticleController = require(`${ControllerApi}/v1/admin/ArticleController`);
const AdminGroupNewsController = require(`${ControllerApi}/v1/admin/GroupnewsController`);
const AdminAddAdminController = require(`${ControllerApi}/v1/admin/AddAdminController`);

//router.get('/' , HomeController.index);
router.get('/version', HomeController.version);
router.post('/login', AuthController.login.bind(AuthController));
router.post('/register', AuthController.register.bind(AuthController));

router.get('/user', apiAuth, UserController.index.bind(UserController));
router.get('/user/:id', apiAuth, UserController.single.bind(UserController));

router.get('/news', apiAuth, NewsController.index.bind(NewsController));
router.get('/news/:id', apiAuth, NewsController.single.bind(NewsController));

router.get('/product', apiAuth, ProductController.index.bind(ProductController));
router.get('/product/:id', apiAuth, ProductController.single.bind(ProductController));

router.get('/comment', apiAuth, CommentController.index.bind(CommentController));
router.get('/comment/:id', apiAuth, CommentController.single.bind(CommentController));

router.get('/header', apiAuth, HeaderController.index.bind(HeaderController));
router.get('/header/:id', apiAuth, HeaderController.single.bind(HeaderController));

router.get('/card', apiAuth, CardController.index.bind(CardController));
router.get('/card/:id', apiAuth, CardController.single.bind(CardController));

router.get('/article', apiAuth, ArticleController.index.bind(ArticleController));
router.get('/article/:id', apiAuth, ArticleController.single.bind(ArticleController));

router.get('/groupnews', GroupnewsController.index.bind(GroupnewsController));
router.get('/groupnews/:id', apiAuth, GroupnewsController.single.bind(GroupnewsController));

router.get('/answer',AnswerController.index.bind(AnswerController));
router.get('/answer/:id', apiAuth, AnswerController.single.bind(AnswerController));
router.post('/answer',AnswerController.store.bind(AnswerController));
router.put('/answer/:id', apiAuth, AnswerController.update.bind(AnswerController));
router.delete('/answer/:id', apiAuth, AnswerController.destroy.bind(AnswerController));


//uploadimage
adminRouter.post('/image', uploadImage.single('image'), UserController.uploadImage.bind(UserController));

router.post('/user/image',apiAuth, uploadImage.single('image'), UserController.uploadImage.bind(UserController));
router.post('/image',apiAuth, uploadImage.single('image'), UploadController.uploadImage.bind(UploadController));

//news
adminRouter.get('/news', apiAuth, AdminNewsController.index.bind(AdminNewsController));
adminRouter.get('/news/:id', apiAuth, AdminNewsController.single.bind(AdminNewsController));
adminRouter.post('/news', apiAuth, AdminNewsController.store.bind(AdminNewsController));
adminRouter.put('/news/:id', apiAuth, AdminNewsController.update.bind(AdminNewsController));
adminRouter.delete('/news/:id', apiAuth, AdminNewsController.destroy.bind(AdminNewsController));


//card
adminRouter.get('/card', apiAuth, AdminCardController.index.bind(AdminCardController));
adminRouter.get('/card/:id', apiAuth, AdminCardController.single.bind(AdminCardController));
adminRouter.post('/card', apiAuth, AdminCardController.store.bind(AdminCardController));
adminRouter.put('/card/:id', apiAuth, AdminCardController.update.bind(AdminCardController));
adminRouter.delete('/card/:id', apiAuth, AdminCardController.destroy.bind(AdminCardController));


//header
adminRouter.get('/header', apiAuth, AdminHeaderController.index.bind(AdminHeaderController));
adminRouter.get('/header/:id', apiAuth, AdminHeaderController.single.bind(AdminHeaderController));
adminRouter.post('/header', apiAuth, AdminHeaderController.store.bind(AdminHeaderController));
adminRouter.put('/header/:id', apiAuth, AdminHeaderController.update.bind(AdminHeaderController));
adminRouter.delete('/header/:id', apiAuth, AdminHeaderController.destroy.bind(AdminHeaderController));


//product
adminRouter.get('/product', apiAuth, AdminProductController.index.bind(AdminProductController));
adminRouter.get('/product/:id', apiAuth, AdminProductController.single.bind(AdminProductController));
adminRouter.post('/product', AdminProductController.store.bind(AdminProductController));
adminRouter.put('/product/:id', apiAuth, AdminProductController.update.bind(AdminProductController));
adminRouter.delete('/product/:id', apiAuth, AdminProductController.destroy.bind(AdminProductController));


//user
adminRouter.get('/user', apiAuth, AdminUserController.index.bind(AdminUserController));
adminRouter.get('/user/:id', apiAuth, AdminUserController.single.bind(AdminUserController));
//adminRouter.post('/user', apiAuth, AdminUserController.store.bind(AdminUserController));
adminRouter.put('/user/:id', apiAuth, AdminUserController.update.bind(AdminUserController));
adminRouter.delete('/user/:id', apiAuth, AdminUserController.destroy.bind(AdminUserController));


//comment
adminRouter.get('/comment', apiAuth, AdminCommentController.index.bind(AdminCommentController));
adminRouter.get('/comment/:id', apiAuth, AdminCommentController.single.bind(AdminCommentController));
adminRouter.put('/comment/:id', apiAuth, AdminCommentController.update.bind(AdminCommentController));
adminRouter.delete('/comment/:id', apiAuth, AdminCommentController.destroy.bind(AdminCommentController));


//answer
adminRouter.get('/answer',  AdminAnswerController.index.bind(AdminAnswerController));
adminRouter.get('/answer/:id', apiAuth, AdminAnswerController.single.bind(AdminAnswerController));
adminRouter.post('/answer',  AdminAnswerController.store.bind(AdminAnswerController));
adminRouter.put('/answer/:id', apiAuth, AdminAnswerController.update.bind(AdminAnswerController));
adminRouter.delete('/answer/:id', apiAuth, AdminAnswerController.destroy.bind(AdminAnswerController));


//article
adminRouter.get('/article',AdminArticleController.index.bind(AdminArticleController));
adminRouter.get('/article/:id',AdminArticleController.single.bind(AdminArticleController));
adminRouter.post('/article',AdminArticleController.store.bind(AdminArticleController));
adminRouter.put('/article/:id',AdminArticleController.update.bind(AdminArticleController));
adminRouter.delete('/article/:id',AdminArticleController.destroy.bind(AdminArticleController));


//groupnews
adminRouter.get('/groupnews', apiAuth, AdminGroupNewsController.index.bind(AdminGroupNewsController));
adminRouter.get('/groupnews/:id', apiAuth, AdminGroupNewsController.single.bind(AdminGroupNewsController));
adminRouter.post('/groupnews', apiAuth, AdminGroupNewsController.store.bind(AdminGroupNewsController));
adminRouter.put('/groupnews/:id', apiAuth, AdminGroupNewsController.update.bind(AdminGroupNewsController));
adminRouter.delete('/groupnews/:id', apiAuth, AdminGroupNewsController.destroy.bind(AdminGroupNewsController));


//addadmin
adminRouter.post('/addadmin', apiAuth, AdminAddAdminController.store.bind(AdminAddAdminController));
adminRouter.put('/addadmin/:id', apiAuth, AdminAddAdminController.update.bind(AdminAddAdminController));



router.use('/admin', adminRouter)
//router.use('/admin', adminRouter);


module.exports = router;
