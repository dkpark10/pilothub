import { createApp, createSSRApp, h } from "vue";
import App from "./App.vue";
import createRouter from "./router/index";
import createStore from "./store/index";

export default () => {
  const rootComponent = {
    render: () => h(App),
    components: { App },
  };

  const isSSR = process.env.SSR;
  const app = (isSSR ? createSSRApp : createApp)(rootComponent);
  const router = createRouter();
  const store = createStore();

  app.use(router);
  app.use(store);

  return {
    app,
    router,
    store,
  };
};
