// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  keyframesSpin: {
    '@keyframes spin': {
      '0%': {
        'stroke-dasharray': '1, 400',
        'stroke-dashoffset': '0',
      },
      '50%': {
        'stroke-dasharray': '400, 400',
        'stroke-dashoffset': '-100',
      },
      '100%': {
        'stroke-dasharray': '400, 400',
        'stroke-dashoffset': '-260',
      },
    },
  },
  base: {
    display: 'inline-block',
    fontFamily:
      "'PS TT Commons Roman', 'Gotham SSm A', 'Gotham SSm B', Arial,\n    sans-serif",
    position: 'relative',
    verticalAlign: 'middle',
  },
  box: {
    height: '3rem',
    width: '3rem',
  },
  circle: {
    fill: 'transparent',
    stroke: 'hsl(237deg 30% 36% / 100%)',
  },
  circleNow: {
    fill: 'transparent',
    stroke: 'hsl(0deg 0% 100% / 100%)',
    transitionDuration: '600ms',
    transitionProperty: 'stroke-dasharray, stroke',
    transitionTimingFunction: 'ease',
  },
  text: {
    display: 'inline-block',
    fontSize: '0.75rem',
    left: '50%',
    position: 'absolute',
    textAlign: 'center',
    top: '42%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
  },
  determinate: {
    composes: 'circleNow',
  },
  indeterminate: {
    animationDirection: 'normal',
    animationDuration: '1.5s',
    animationFillMode: 'none',
    animationIterationCount: 'infinite',
    animationName: 'spin',
    animationPlayState: 'running',
    animationTimingFunction: 'linear',
    composes: 'circleNow',
  },
  xsSize: {
    height: '1.25rem',
    width: '1.25rem',
  },
}
