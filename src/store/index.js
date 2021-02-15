import Vue from "vue";
import Vuex, { createLogger } from "vuex";
import data from "./modules/data";
import ui from "./modules/ui";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    ui,
    data
  },
  string: debug,
  plugins: debug ? [createLogger()] : []
});
