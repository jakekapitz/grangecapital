export default [
  {
    path: "/posts/residual-stock-construction-loan-funded-in-8-days/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\web\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-raises-finance-for-12m-mixed-user-development-in-sydneys-northern-beaches/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\web\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-raises-finances-for-12m-residential-subdivision-in-austral/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\web\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-raises-funds-for-9m-residential-townhouse-development/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\web\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-finances-30m-106-lot-residential-subdivision/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\web\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-facilitates-5-townhouse-development-sale/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\web\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/news/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-pages-news-vue" */ "D:\\web\\grangecapital\\src\\pages\\News.vue")
  },
  {
    path: "/team/",
    component: () => import(/* webpackChunkName: "page--src-pages-team-vue" */ "D:\\web\\grangecapital\\src\\pages\\Team.vue")
  },
  {
    path: "/success/",
    component: () => import(/* webpackChunkName: "page--src-pages-success-vue" */ "D:\\web\\grangecapital\\src\\pages\\Success.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\web\\grangecapital\\src\\pages\\Contact.vue")
  },
  {
    path: "/business/",
    component: () => import(/* webpackChunkName: "page--src-pages-business-vue" */ "D:\\web\\grangecapital\\src\\pages\\Business.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\web\\grangecapital\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\web\\grangecapital\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\web\\grangecapital\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\web\\grangecapital\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

