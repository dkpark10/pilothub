import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);
const isProductionMode = process.env.NODE_ENV === "production";

/**
 * @description 뷰 경고 메세지 필터 핸들러 함수
 */
app.config.warnHandler = (msg) => {
  if (isProductionMode) {
    return;
  }

  // if (msg.indexOf("Invalid prop: type check failed for prop") === 0) {
  //   return;
  // }

  console.log(msg);
};

app.config.globalProperties.headerTopHeight = 48;

app.use(store).use(router).mount("#app");
