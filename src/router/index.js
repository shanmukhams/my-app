import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Chat from '../views/Chat'
import Movie from '../views/Movie'
import Blog from '../views/Blog'
import Todo from '../views/Todo'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
  },
  {
    path: '/chat',
    name: 'Chat',
    component: Chat,
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
