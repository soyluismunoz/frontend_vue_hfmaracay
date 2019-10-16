import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Dashboard = () => import(/* webpackChunkName: "about" */ '@/views/dashboard/Dashboard.vue');
const Item = () => import(/* webpackChunkName: "about" */ '@/views/item/Item.vue');
const Home = () => import(/* webpackChunkName: "about" */ '@/views/home/Home.vue');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      redirect: '/home',
      component: Dashboard,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'item',
          name: 'Item',
          component: Item
        }
      ]
    },
  ]
})
