import { createRouter, createWebHashHistory } from 'vue-router'
import BeneGesserit from '../views/BeneGesseritView.vue'
import AtreitesView from '../views/AtreitesView.vue'
import FremenView from '../views/FremenView.vue'
import HarkonenView from '../views/HarkonenView.vue'
import VerticalGrids from '../components/LayoutComponents/VerticalGrids.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: VerticalGrids 
  },
  {
    path: '/Atreites',
    name: 'Atreites',
    component: AtreitesView
  },
  {
    path: '/Fremen',
    name: 'Fremen',
    component: FremenView
  },
  {
    path: '/BeneGesserit',
    name: 'BeneGesserit',
    component: BeneGesserit
  },
  {
    path: '/Harkonen',
    name: 'Harkonen',
    component: HarkonenView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
