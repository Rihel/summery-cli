import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
export default () => {
  Vue.use(VueLazyload)
  Vue.use(VueAwesomeSwiper)
}