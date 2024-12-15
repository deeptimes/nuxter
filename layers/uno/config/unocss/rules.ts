export const rules = [
  ['fade-enter-active', { transition: 'opacity 0.5s ease' }],
  ['fade-leave-active', { transition: 'opacity 0.5s ease' }],
  ['fade-enter-from', { opacity: '0' }],
  ['fade-leave-to', { opacity: '0' }],
  ['fade-enter-to', { opacity: '1' }],
  ['fade-leave-from', { opacity: '1' }],
  // Drawer的过渡规则
  [/^slide-([trbl])-(enter|leave)-(active|from|to)$/, ([, dir, stage, state]) => {
    const transformMap = {
      t: 'translateY(-100%)',
      r: 'translateX(100%)',
      b: 'translateY(100%)',
      l: 'translateX(-100%)',
    }
    if (state === 'active')
      return { transition: 'transform 0.3s ease' }
    else if (state === 'from' && stage === 'enter')
      return { transform: transformMap[dir] }
    else if (state === 'to' && stage === 'leave')
      return { transform: transformMap[dir] }
    else if (state === 'to' && stage === 'enter')
      return { transform: 'translate(0)' }
    else if (state === 'from' && stage === 'leave')
      return { transform: 'translate(0)' }
    return {}
  }],
]
