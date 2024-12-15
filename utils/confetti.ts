import confetti from 'canvas-confetti'

export function triggerConfetti(zindex = 0) {
  const count = 200

  function fire(particleRatio: number, opts: any, originX: number, angle: number) {
    confetti({
      origin: { y: 0.55, x: originX },
      angle,
      zIndex: zindex,
      particleCount: Math.floor(count * particleRatio),
      ...opts,
    })
  }

  const configs = [
    { particleRatio: 0.25, opts: { spread: 26, startVelocity: 55 } },
    { particleRatio: 0.2, opts: { spread: 60 } },
    { particleRatio: 0.35, opts: { spread: 100, decay: 0.91, scalar: 0.8 } },
    { particleRatio: 0.1, opts: { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 } },
    { particleRatio: 0.1, opts: { spread: 120, startVelocity: 45 } },
  ]

  const angles = [
    { originX: 0.6, angle: 60 }, // Right side
    { originX: 0.4, angle: 120 }, // Left side
  ]

  // Fire confetti for each angle configuration
  angles.forEach(({ originX, angle }) => {
    configs.forEach(({ particleRatio, opts }) => {
      fire(particleRatio, opts, originX, angle)
    })
  })
}
