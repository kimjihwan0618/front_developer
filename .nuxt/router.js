import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _adbf6346 = () => interopDefault(import('..\\pages\\components\\contact.vue' /* webpackChunkName: "pages/components/contact" */))
const _d4cc0f38 = () => interopDefault(import('..\\pages\\components\\main-section.vue' /* webpackChunkName: "pages/components/main-section" */))
const _6eab50d6 = () => interopDefault(import('..\\pages\\components\\project.vue' /* webpackChunkName: "pages/components/project" */))
const _58f7b350 = () => interopDefault(import('..\\pages\\components\\project-detail.vue' /* webpackChunkName: "pages/components/project-detail" */))
const _60f37f28 = () => interopDefault(import('..\\pages\\components\\sub-section1.vue' /* webpackChunkName: "pages/components/sub-section1" */))
const _60d75026 = () => interopDefault(import('..\\pages\\components\\sub-section2.vue' /* webpackChunkName: "pages/components/sub-section2" */))
const _60bb2124 = () => interopDefault(import('..\\pages\\components\\sub-section3.vue' /* webpackChunkName: "pages/components/sub-section3" */))
const _09194fb6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/portfolio/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/components/contact",
    component: _adbf6346,
    name: "components-contact"
  }, {
    path: "/components/main-section",
    component: _d4cc0f38,
    name: "components-main-section"
  }, {
    path: "/components/project",
    component: _6eab50d6,
    name: "components-project"
  }, {
    path: "/components/project-detail",
    component: _58f7b350,
    name: "components-project-detail"
  }, {
    path: "/components/sub-section1",
    component: _60f37f28,
    name: "components-sub-section1"
  }, {
    path: "/components/sub-section2",
    component: _60d75026,
    name: "components-sub-section2"
  }, {
    path: "/components/sub-section3",
    component: _60bb2124,
    name: "components-sub-section3"
  }, {
    path: "/",
    component: _09194fb6,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
