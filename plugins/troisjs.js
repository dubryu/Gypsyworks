import Vue from 'vue'; // Vueを定義するために、Vueをimport
import { Box, Camera, LambertMaterial, PointLight, Renderer, Scene } from 'troisjs';
Vue.component('Box', Box)
Vue.component('Camera', Camera)
Vue.component('LambertMaterial', LambertMaterial)
Vue.component('PointLight', PointLight)
Vue.component('Renderer', Renderer)
Vue.component('Scene', Scene)

// add code to build->transpile and plugins
