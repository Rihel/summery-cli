module.exports = {
  router: {
    linkActiveClass: 'active'
  },
  head: {
    title: `全栈项目`,
    meta: [
      { name: `keywords`, content: `关键字` },
      { name: `description`, content: `网站描述`}
    ]
  },
  css:[
    { src: '~/assets/scss/index.scss',lang: 'scss'},
    { src: 'swiper/dist/css/swiper.min.css' },
  ],
  build: {
    extractCSS: true
  },
  plugins: [
    { src: '~/plugins/other', ssr: false}
  ],
  modules: [
    ['nuxt-sass-resources-loader', [
      './assets/scss/lib/index.scss'
    ]]
  ]
}