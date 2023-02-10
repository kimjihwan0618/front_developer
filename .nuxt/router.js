import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _29b7c7c9 = () => interopDefault(import('..\\pages\\components\\contact.vue' /* webpackChunkName: "pages/components/contact" */))
const _0e118278 = () => interopDefault(import('..\\pages\\components\\main-section.vue' /* webpackChunkName: "pages/components/main-section" */))
const _217a6b7c = () => interopDefault(import('..\\pages\\components\\project.vue' /* webpackChunkName: "pages/components/project" */))
const _0c417b6c = () => interopDefault(import('..\\pages\\components\\project-detail.vue' /* webpackChunkName: "pages/components/project-detail" */))
const _47fdca80 = () => interopDefault(import('..\\pages\\components\\sub-section1.vue' /* webpackChunkName: "pages/components/sub-section1" */))
const _480be201 = () => interopDefault(import('..\\pages\\components\\sub-section2.vue' /* webpackChunkName: "pages/components/sub-section2" */))
const _4819f982 = () => interopDefault(import('..\\pages\\components\\sub-section3.vue' /* webpackChunkName: "pages/components/sub-section3" */))
const _d11702de = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _29b7c7c9,
    name: "components-contact"
  }, {
    path: "/components/main-section",
    component: _0e118278,
    name: "components-main-section"
  }, {
    path: "/components/project",
    component: _217a6b7c,
    name: "components-project"
  }, {
    path: "/components/project-detail",
    component: _0c417b6c,
    name: "components-project-detail"
  }, {
    path: "/components/sub-section1",
    component: _47fdca80,
    name: "components-sub-section1"
  }, {
    path: "/components/sub-section2",
    component: _480be201,
    name: "components-sub-section2"
  }, {
    path: "/components/sub-section3",
    component: _4819f982,
    name: "components-sub-section3"
  }, {
    path: "/",
    component: _d11702de,
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
