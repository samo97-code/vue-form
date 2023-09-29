import './style.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

createApp(App).use(VueTelInput).mount('#app')
