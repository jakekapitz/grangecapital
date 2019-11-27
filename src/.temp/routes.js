export default [
  {
    path: "/team/",
    component: () => import(/* webpackChunkName: "page--src-pages-team-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\Team.vue")
  },
  {
    path: "/success/",
    component: () => import(/* webpackChunkName: "page--src-pages-success-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\Success.vue")
  },
  {
    path: "/news/",
    component: () => import(/* webpackChunkName: "page--src-pages-news-vue" */ "C:\\sites\\client\\grangecapital\\src\\pages\\News.vue")
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

