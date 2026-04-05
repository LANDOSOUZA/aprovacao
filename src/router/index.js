import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ServicosView from '../views/ServicosView.vue'
import SobreView from '../views/SobreView.vue'
import FAQView from '../views/FAQView.vue'
import ContatoView from '../views/ContatoView.vue'

import PoliticaView from '../views/PoliticaView.vue'
import TermosView from '../views/TermosView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/servicos', component: ServicosView },
  { path: '/sobre', component: SobreView },
  { path: '/faq', component: FAQView },
  { path: '/contato', component: ContatoView },
  { path: '/politica', component: PoliticaView },
  { path: '/termos', component: TermosView },

  {
    path: '/obrigado',
    name: 'Obrigado',
    component: () => import('../views/ObrigadoView.vue')
  },

  {
    path: '/enviar/:processo',
    name: 'envio-documentos',
    component: () => import('@/views/EnvioDocumentosView.vue')
  },

  {
    path: '/admin',
    name: 'admin',
  component: () => import('@/views/AdminLinksView.vue')
  },

  {
    path: '/admin',
    name: 'admin-gate',
    component: () => import('@/views/AdminGateView.vue')
  },
  {
    path: '/admin/form',
    name: 'admin-form',
    component: () => import('@/views/AdminLinksView.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})