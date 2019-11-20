export default [
  {
    path: "/team/",
    component: () => import(/* webpackChunkName: "page--src-pages-team-vue" */ "D:\\web\\grangecapital\\src\\pages\\Team.vue")
  },
  {
    path: "/news/",
    component: () => import(/* webpackChunkName: "page--src-pages-news-vue" */ "D:\\web\\grangecapital\\src\\pages\\News.vue")
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

