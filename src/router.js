import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Routes from './views/Routes.vue'
import Hotels from './views/Hotels.vue'
import Food from './views/Food.vue'
import Couriosities from './views/Couriosities.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/routes',
      name: 'routes',
      component: Routes
    },
    {
      path: '/hotels',
      name: 'hotels',
      component: Hotels
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    },
    {
      path: '/couriosities',
      name: 'couriosities',
      component: Couriosities
    }
  ]
})
