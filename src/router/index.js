import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import BookDetail from '../views/BookDetail.vue';
import Cart from '../views/Cart.vue';
import OrderComplete from '../views/OrderComplete.vue';
import GBooks from '../views/GBooks.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/complete',
    name: 'OrderComplete',
    component: OrderComplete
  },
  {
    path: '/gbooks',
    name: 'GBooks',
    component: GBooks
  },
  {
    path: '/:id',
    name: 'BookDetail',
    component: BookDetail
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
