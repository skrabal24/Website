const ease = [0.22, 1, 0.36, 1] as const

export const heroReveal = {
  initial: {
    opacity: 0,
    y: 28,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.65,
    ease,
  },
}

export function createRevealProps(delay = 0) {
  return {
    initial: {
      opacity: 0,
      y: 24,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.2,
    },
    transition: {
      duration: 0.55,
      delay,
      ease,
    },
  }
}
