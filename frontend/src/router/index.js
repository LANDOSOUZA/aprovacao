import { createRouter, createWebHistory } from 'vue-router'
import { getUser } from '@/services/cognitoAuth'

import HomeView from '../views/HomeView.vue'
import ServicosView from '../views/ServicosView.vue'
import SobreView from '../views/SobreView.vue'
import FAQView from '../views/FAQView.vue'
import ContatoView from '../views/ContatoView.vue'
import PoliticaView from '../views/PoliticaView.vue'
import TermosView from '../views/TermosView.vue'

const routes = [

  {
    path: "/admin/tabela-precos",
    name: "tabela-precos",
    component: () => import("@/views/admin/TabelaPrecosView.vue"),
  },

  {
    path: '/',
    component: HomeView,
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/',
      title: 'Aprovação Administrativa – Regularização e Apoio Administrativo',
      description: 'Serviços administrativos para regularização, cadastros e defesas administrativas junto à Prefeitura e órgãos públicos municipais.'
    }
  },

  {
    path: '/servicos',
    component: ServicosView,
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/servicos',
      title: 'Serviços – Aprovação Administrativa',
      description: 'Conheça nossos serviços de apoio administrativo, regularização, cadastros e defesas administrativas municipais.'
    }
  },

  {
    path: '/servicos/lta',
    component: () => import('../views/LTAView.vue'),
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/servicos/lta',
      title: 'Planta Técnica para LTA - Aprovação Administrativa',
      description: 'Elaboração de plantas técnicas para Laudo Técnico de Avaliação (LTA), com revisão e ART de engenheiro parceiro.'
    }
  },

  {
    path: '/sobre',
    component: SobreView,
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/sobre',
      title: 'Sobre Nós – Aprovação Administrativa',
      description: 'Saiba mais sobre nossa atuação em apoio administrativo e regularização junto a órgãos públicos municipais.'
    }
  },

  {
    path: '/faq',
    component: FAQView,
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/faq',
      title: 'Perguntas Frequentes – Aprovação Administrativa',
      description: 'Tire suas dúvidas sobre regularização, cadastros e defesas administrativas municipais.'
    }
  },

  {
    path: '/contato',
    component: ContatoView,
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/contato',
      title: 'Contato – Aprovação Administrativa',
      description: 'Entre em contato para solicitar apoio administrativo, regularização ou defesa administrativa.'
    }
  },

  {
    path: '/politica',
    component: PoliticaView,
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/politica',
      title: 'Política de Privacidade – Aprovação Administrativa',
      description: 'Leia nossa política de privacidade e entenda como tratamos seus dados.'
    }
  },

  {
    path: '/termos',
    component: TermosView,
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/termos',
      title: 'Termos de Uso – Aprovação Administrativa',
      description: 'Termos de uso dos serviços e informações do site Aprovação Administrativa.'
    }
  },

  {
    path: '/obrigado',
    name: 'Obrigado',
    component: () => import('../views/ObrigadoView.vue'),
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/obrigado',
      title: 'Obrigado – Aprovação Administrativa',
      description: 'Agradecemos o envio das informações. Em breve entraremos em contato.'
    }
  },

  {
    path: '/enviar/:processo',
    name: 'envio-documentos',
    component: () => import('@/views/admin/EnvioDocumentosView.vue'),
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/enviar',
      title: 'Envio de Documentos – Aprovação Administrativa',
      description: 'Envie documentos necessários para regularização ou defesa administrativa.'
    }
  },

  {
    path: '/admin',
    name: 'admin-gate',
    component: () => import('@/views/admin/AdminGateView.vue'),
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/admin',
      title: 'Admin – Login',
      description: 'Acesso administrativo restrito.'
    }
  },

  {
    path: '/admin/form',
    name: 'admin-form',
    component: () => import('@/views/admin/AdminLinksView.vue'),
    meta: {
      canonical: 'https://www.aprovacaoadm.com.br/admin/form',
      title: 'Admin – Painel',
      description: 'Painel administrativo restrito.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


// ------------------------------------------------------
// 🔒 Proteção da rota administrativa
// ------------------------------------------------------
router.beforeEach(async (to, from, next) => {
  // Protege TODAS as rotas administrativas, exceto a própria tela de login (/admin)
  const isAdminRoute = to.path.startsWith('/admin') && to.path !== '/admin'

  if (isAdminRoute) {
    try {
      const user = await getUser()
      if (!user) {
        return next('/admin')
      }
    } catch {
      return next('/admin')
    }
  }

  next()
})


// ------------------------------------------------------
// 🔗 Atualiza a canonical, title e description a cada navegação
// ------------------------------------------------------
router.afterEach((to) => {
  // CANONICAL
  let canonical = document.querySelector("link[rel='canonical']")
  if (!canonical) {
    canonical = document.createElement("link")
    canonical.setAttribute("rel", "canonical")
    document.head.appendChild(canonical)
  }
  canonical.setAttribute("href", to.meta.canonical)

  // TITLE
  if (to.meta.title) {
    document.title = to.meta.title
  }

  // DESCRIPTION
  let desc = document.querySelector("meta[name='description']")
  if (!desc) {
    desc = document.createElement("meta")
    desc.setAttribute("name", "description")
    document.head.appendChild(desc)
  }
  desc.setAttribute("content", to.meta.description || "")
})

export default router