/**
 * @name Env.d.ts
 * @link https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript
 * @desc 提供类型定义
 * @refer https://github.com/johnsoncodehk/volar/issues/1077#issuecomment-1145361472
*/

// for native html elements
declare module '@vue/runtime-dom' {
  interface HTMLAttributes {
    [key: string]: any
  }
  interface SVGAttributes {
    [key: string]: any
  }
}

// for vue components
declare module '@vue/runtime-core' {
  interface AllowedComponentProps {
    [key: string]: any
  }
}

// for nuxt.config
declare module '@nuxt/schema' {
  interface config {

  }
}

export { }