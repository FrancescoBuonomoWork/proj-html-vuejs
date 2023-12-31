import { createApp } from 'vue';

import App from './App.vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass,faCircle,faLocationDot,faEnvelope,faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faFacebook,faYoutube,faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faMagnifyingGlass,faTwitter,faFacebook,faYoutube,faInstagram,faCircle,faLocationDot,faEnvelope,faPhone);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
