import { createApp } from 'vue';
import App from "@/App";
import router from './router'
import PrimeVue from 'primevue/config';
import Button from "primevue/button";
import InputText from "primevue/inputtext";
//css
import "primevue/resources/themes/saga-blue/theme.css"       //theme
import "primevue/resources/primevue.min.css"                 //core css
import "primeicons/primeicons.css"                           //icons
import 'primeflex/primeflex.css';                            //flex css

const app = createApp(App);
console.log(1);
app.use(router);
app.use(PrimeVue, {ripple: true});
app.component('Button',Button);
app.component('InputText',InputText);
console.log(10);
app.mount('#app');