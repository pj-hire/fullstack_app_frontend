import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Info from '../views/Info.vue'
import Account from '../views/Account.vue'
import Books from '../views/Books.vue'
import Read from '../views/Read.vue'
import Unread from '../views/Unread.vue'
import Addbook from '../views/Addbook.vue'
import Viewbook from '../views/Viewbook.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    children: [
      {
        path: '/info',
        name: 'Info',
        component: Info
      },
      {
        path: '/account',
        name: 'Account',
        component: Account
      },
      {
        path: '/books',
        name: 'Books',
        component: Books,
        children: [
          {
            path: 'read',
            name: 'Read',
            component: Read
          },
          {
            path: 'unread',
            name: 'Unread',
            component: Unread
          },
          {
            path: 'addbook',
            name: 'Addbook',
            component: Addbook
          },
          {
            path: ':booktitle',
            name: 'Viewbook',
            component: Viewbook
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
