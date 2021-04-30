import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Chat from '../views/Chat'
import Movie from '../views/Movie'
import Blog from '../views/Blog'
import Todo from '../views/Todo'
import Game from '../views/Game'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/',
    redirect: '/profile'
  },
  {
    path: '/profile',
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
  {
    path: '/game',
    name: 'Game',
    component: Game,
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
