import { createApp } from 'vue'
import App from './App.vue'
import VCalendar from 'v-calendar';


createApp(App).use(VCalendar, {componentPrefix: 'vc'}).mount('#app')
