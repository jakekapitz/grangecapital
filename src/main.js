// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "./assets/css/global.css";


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  head.link.push({
    rel: 'stylesheet',
    href: 'href="https://fonts.googleapis.com/css?family=Abhaya+Libre&display=swap'
  })
  head.link.push({
    rel: 'stylesheet',
    href: 'href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap'
  })
}
