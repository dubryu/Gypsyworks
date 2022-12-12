import Vue from 'vue'
import InstagramEmbed from 'vue-instagram-embed'

import VuePrlx from 'vue-prlx'

import VueRellax from 'vue-rellax'

import 'swiper/swiper-bundle.css'

import VueObserveVisibility from 'vue-observe-visibility'

import { Fake3dImageEffect } from '@luxdamore/vue-fake3d-image-effect';
import '@luxdamore/vue-fake3d-image-effect/dist/Fake3dImageEffect.css';
// import SmokeMachine from '@bijection/smoke'

Vue.component("InstagramEmbed", InstagramEmbed)
Vue.use(VuePrlx)
Vue.use(VueRellax)
// Vue.use(VueAwesomeSwiper)
Vue.use(VueObserveVisibility)

Vue.component('fake3d-image-effect', Fake3dImageEffect)
// Vue.component('SmokeMachine', SmokeMachine)
