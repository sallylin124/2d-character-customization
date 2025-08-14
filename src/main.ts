/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins' // 假設這裡包含了 Vuetify 的註冊

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Styles
import 'unfonts.css'

// 引入 Pinia
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia() // 建立 Pinia 實例

// 註冊 Pinia 到 Vue 應用程式
app.use(pinia)

// 註冊其他插件 (例如 Vuetify)，確保在 app.mount 之前
registerPlugins(app)

// 最後，只掛載應用程式一次
app.mount('#app')