import type { Tech } from '../types'
import type {
  CircularProgressA11yOptions,
  CircularProgressOptions,
  Kind,
  Size,
} from './types'

const a11yRole = 'progressbar'
const a11yPropMap = {
  valueMax: 'aria-valuemax',
  valueMin: 'aria-valuemin',
  valueNow: 'aria-valuenow',
}

const DASH_OFFSET = '66'

const defaultCircularProgressOptions = {
  kind: 'determinate' as Kind,
  max: 100,
  min: 0,
  now: 0,
  size: 'm' as Size,
  tech: '' as Tech,
}

function getDashArray(nowValue: number) {
  const dash = nowValue * 2.64
  const gap = 264 - dash
  return `${dash} ${gap}`
}

// public

export const VIEWBOX = '0 0 100 100'
export const baseCircleProps = {
  cx: '50',
  cy: '50',
  r: '42',
  strokeWidth: '12px',
}

export function getStrokeProps(now: number) {
  return {
    strokeDashoffset: DASH_OFFSET,
    strokeDasharray: getDashArray(now),
  }
}

export function getDefaultCircularProgressOptions(
  options?: CircularProgressOptions
) {
  return {
    kind: options?.kind ?? defaultCircularProgressOptions.kind,
    max: options?.max ?? defaultCircularProgressOptions.max,
    min: options?.min ?? defaultCircularProgressOptions.min,
    now: options?.now ?? defaultCircularProgressOptions.now,
    size: options?.size ?? defaultCircularProgressOptions.size,
    tech: options?.tech ?? defaultCircularProgressOptions.tech,
  }
}

export function getA11yCircularProgressProps(
  a11yOptions?: CircularProgressA11yOptions,
  kind?: Kind
) {
  if (kind === 'indeterminate') {
    return { role: a11yRole }
  }

  return {
    [a11yPropMap.valueMax]: a11yOptions?.max,
    [a11yPropMap.valueMin]: a11yOptions?.min,
    [a11yPropMap.valueNow]: a11yOptions?.now,
    role: a11yRole,
  }
}
