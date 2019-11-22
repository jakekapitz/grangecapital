// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "./assets/css/global.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleRight, faChevronRight, faEnvelope, faMobileAlt, faPiggyBank, faPuzzlePiece, faSearch, faTrophy, faClock, faBuilding,faAt } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faFacebook, faLinkedin, faInstagram, faChevronCircleRight, faChevronRight, faEnvelope, faMobileAlt, faPiggyBank, faPuzzlePiece, faSearch, faTrophy, faClock, faBuilding, faAt)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  Vue.component('font-awesome', FontAwesomeIcon),
  head.link.push({
    rel: 'stylesheet',
    href: 'href="https://fonts.googleapis.com/css?family=Abhaya+Libre|Open+Sans&display=swap'
  })
}
