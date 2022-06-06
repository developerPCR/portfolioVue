
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'






//fas Solid
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
     faLaptopFile, 
     faCode, 
     faAtom, 
     faMobile, 
     faBars, 
     faExclamation, 
     faArrowRight, 
     faPersonDigging, 
     faCircleExclamation,
     faArrowDown,
     faBrain,
     faUsers,
     faMicrophoneLines
} from '@fortawesome/free-solid-svg-icons'
//far regular
import { faLightbulb as farLightbulb  } from '@fortawesome/free-regular-svg-icons'


//fab brands
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'





library.add(  
     faLaptopFile,
     faLinkedin,
     faGithub,
     faCode,
     faAtom,
     faMobile,
     faBars,
     faExclamation,
     faArrowRight,
     faPersonDigging,
     faCircleExclamation,
     faArrowDown,
     faBrain,
     faUsers,
     farLightbulb,
     faMicrophoneLines



     

     
     
     )

const app = createApp(App);


app.component('font-awesome-icon', FontAwesomeIcon)

.use(router)
.mount('#app')


require("./assets/tailwind.css")


/* eslint-disable no-new */


