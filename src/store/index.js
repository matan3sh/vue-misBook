import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
import bookModule from './modules/book.module.js';
import cartModule from './modules/cart.module.js';

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    bookModule,
    cartModule
  }
});
