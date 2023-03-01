import { createApp } from "vue";
import { createPinia } from "pinia";
import globalComponents from "@/components/global-components";
import "@/assets/scss/global.scss";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(globalComponents);
app.use(createPinia());
app.use(router);

app.mount("#app");
