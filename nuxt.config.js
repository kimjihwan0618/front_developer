export default {
  target: "static",
  router: {
    base: "/portfolio/"
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "김지환 포트폴리오",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    // script : [
    //   { src : "https://maps.googleapis.com/maps/api/js?key=AIzaSyBq0QlIOuHsix2pUKYJkok0B6TMsooqsEc&callback=&language=en&callback=initMap"}
    // ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/scss/style.scss"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // transpile: [/^vue2-google-maps($|\/)/],
  }
};
