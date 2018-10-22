import styled from 'react-emotion'
import posed from 'react-pose'

const staggerDelay = 50

export const Parent = styled(
  posed.div({
    done: {
      height: 'auto',
      opacity: 1,
      transition: ({ duration }: { duration: number }) => ({
        duration,
        height: { ease: [0.4, 0.0, 0.2, 1] },
      }),
    },
    loading: {
      height: 60,
      opacity: 1,
      transition: ({ duration }: { duration: number }) => ({
        duration,
        height: { ease: [0.4, 0.0, 0.2, 1] },
      }),
    },
    start: { height: 0, opacity: 0 },
  })
)`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`

export const Child = posed.div({
  enter: {
    delay: (props: any) => props.i * staggerDelay,
    opacity: 1,
    scale: 1,
    transition: ({ duration }: { duration: number }) => ({
      duration: (duration * 2) / 3,
      opacity: { ease: [0.4, 0.0, 0.2, 1] },
      scale: { ease: [0.0, 0.0, 0.2, 1] },
    }),
  },
  exit: {
    opacity: 1,
    transition: ({ duration }: { duration: number }) => ({
      duration: (duration * 1) / 3,
    }),
  },
  start: { opacity: 0, scale: 0.95 },
})
