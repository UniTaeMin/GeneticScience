import Vue from 'vue'
import Router from 'vue-router'
import s1 from './views/s1.vue'
import s2 from './views/s2.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 's1',
      component: s1
    },
    {
      path: '/s1',
      name: 's2',
      component: s2
    },

  ]
})