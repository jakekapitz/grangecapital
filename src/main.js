// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import "./assets/css/global.css";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleRight, faChevronRight, faEnvelope, faMobileAlt, faPiggyBank, faPuzzlePiece, faSearch, faTrophy, faClock, faBuilding, faAt, faBars, faTimes, faChevronDown, faChevronUp, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
require('typeface-abhaya-libre')
require('typeface-open-sans')

config.autoAddCss = false;
library.add(faFacebook, faLinkedin, faInstagram, faChevronCircleRight, faChevronRight, faEnvelope, faMobileAlt, faPiggyBank, faPuzzlePiece, faSearch, faTrophy, faClock, faBuilding, faAt, faBars, faTimes, faChevronDown, faChevronUp, faPlus, faMinus)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout),
  Vue.component('font-awesome', FontAwesomeIcon);
  if (process.isClient) {
    Vue.use(AOS.init())
  }
}
