/**
 * @name shim-env.d.ts
 * @link https://github.com/johnsoncodehk/volar/issues/1077#issuecomment-1145361472
 * @desc for UnoCSS attributify mode compact in Volar
 * @config by https://github.com/deeptimes/nuxter
*/

// swiper For vue module type
declare module 'swiper/vue' {
  import { DefineComponent } from 'vue';
  export const Swiper: DefineComponent;
  export const SwiperSlide: DefineComponent;
}

// For svg icon
declare module '*.svg' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

