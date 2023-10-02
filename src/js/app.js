// Import Vue
import { createApp } from 'vue';

// Import Framework7
import Framework7 from 'framework7/lite-bundle';

// Import Framework7-Vue Plugin
import Framework7Vue, { registerComponents } from 'framework7-vue/bundle';

// Import Framework7 Styles
import 'framework7/css/bundle';

// Import Icons and App Custom Styles
import '../css/icons.css';
import '../css/app.less';

// Import App Component
import App from '../components/app.vue';

//Import Google Login
import vue3GoogleLogin  from 'vue3-google-login';

// Init Framework7-Vue Plugin
Framework7.use(Framework7Vue);

// Init App
const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId: '968074210001-86bg25lik4j22cfc03mgheo01pa0ajro.apps.googleusercontent.com'
})

// Register Framework7 Vue components
registerComponents(app);

// Mount the app
app.mount('#app');