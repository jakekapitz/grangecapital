export default [
  {
    path: "/posts/residual-stock-construction-loan-funded-in-8-days/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\sites\\client\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-raises-finance-for-12m-mixed-user-development-in-sydneys-northern-beaches/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\sites\\client\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-raises-finances-for-12m-residential-subdivision-in-austral/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\sites\\client\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-raises-funds-for-9m-residential-townhouse-development/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\sites\\client\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-finances-30m-106-lot-residential-subdivision/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\sites\\client\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/posts/grange-capital-facilitates-5-townhouse-development-sale/",
    component: () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "C:\\sites\\client\\grangecapital\\src\\templates\\Post.vue")
  },
  {
    path: "/news/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src-pages-news-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\News.vue")
  },
  {
    path: "/team/",
    component: () => import(/* webpackChunkName: "page--src-pages-team-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\Team.vue")
  },
  {
    path: "/success/",
    component: () => import(/* webpackChunkName: "page--src-pages-success-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\Success.vue")
  },
  {
    path: "/contact/",
    component: () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\Contact.vue")
  },
  {
    path: "/business/",
    component: () => import(/* webpackChunkName: "page--src-pages-business-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\Business.vue")
  },
  {
    path: "/about/",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\About.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\sites\\client\\grangecapital\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\sites\\client\\grangecapital\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

