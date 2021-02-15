import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vuesax from "vuesax";
import LottieAnimation from "lottie-vuejs/src/LottieAnimation.vue";
import responsive from "vue-responsive";

Vue.config.productionTip = false;

Vue.use(Vuesax, {
  colors: {
    primary: "#2ab796"
  }
});

Vue.use(LottieAnimation);

Vue.use(responsive);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
