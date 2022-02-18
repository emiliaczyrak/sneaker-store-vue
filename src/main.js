import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseCard from "./components/UI/BaseCard.vue";

createApp(App)
  .use(store)
  .use(router)
  .component("base-button", BaseButton)
  .component("base-card", BaseCard)
  .mount("#app");
