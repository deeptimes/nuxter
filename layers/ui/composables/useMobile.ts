import { breakpoints } from '../../uno/config/breakpoints'

export function useMobile() {
  const { isMobile, isTablet, isDesktop } = useDevice()
  const breakpointsRef = useBreakpoints(breakpoints)

  const md = breakpointsRef.smaller('md')

  const isMobileView = computed(() =>
    // isMobile || md.value,
    isMobile,
  )

  return {
    isMobileView,
  }
}
