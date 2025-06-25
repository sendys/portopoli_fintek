import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faShoppingCart, faChartLine, faBoxOpen, faUsers, faMobileAlt, faShieldAlt, faCheckCircle, faStar, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube, faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// Add the imported icons to the library
library.add(
  faShoppingCart, 
  faChartLine, 
  faBoxOpen, 
  faUsers, 
  faMobileAlt, 
  faShieldAlt, 
  faCheckCircle, 
  faStar, 
  faChevronDown,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
  faGoogle,
  faApple
);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});
