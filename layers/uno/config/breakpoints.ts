// config/breakpoints.ts

// 基础断点配置
const breakpoints = {
  sx: 375, // 小屏手机
  sl: 430, // 大屏手机
  sm: 768, // tablet 平板
  sd: 1024, // small desktop 小屏电脑
  md: 1280, // medium desktop 中屏电脑
  ml: 1366, // medium large 中屏电脑
  lg: 1440, // large desktop 标准电脑屏
  xl: 1680, // extra large 大屏显示器
  hd: 1920, // HD/2K 超大屏
} as const

// 类型定义
export type Breakpoint = keyof typeof breakpoints
export type BreakpointValue = typeof breakpoints[Breakpoint]

// 工具函数：将数字转换为带 px 的字符串
const toPx = (value: number) => `${value}px`

// 生成 UnoCSS 配置用的断点对象
const unoBreakpoints = Object.entries(breakpoints).reduce(
  (acc, [key, value]) => ({
    ...acc,
    [key]: toPx(value),
  }),
  {} as Record<Breakpoint, string>,
)

// 导出
export {
  breakpoints, // 数字类型的断点，用于 VueUse
  unoBreakpoints, // 字符串类型的断点，用于 UnoCSS
}
