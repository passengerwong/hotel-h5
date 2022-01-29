import { createApp } from "vue";
import App from "./App.vue";

import { Button } from "vant";

import "./tools/rem";

createApp(App).use(Button).mount("#app");
