import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS global
import './assets/css/main.css'

// Criação da aplicação
const app = createApp(App)

// Registro do router
app.use(router)

// Montagem final
app.mount('#app')

