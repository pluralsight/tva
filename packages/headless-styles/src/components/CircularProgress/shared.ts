import type {
  CircularProgressA11yOptions,
  CircularProgressOptions,
  Kind,
  Size,
  Tech,
} from './types'

const a11yRole = 'progressbar'
const a11yPropMap = {
  valueMax: 'aria-valuemax',
  valueMin: 'aria-valuemin',
  valueNow: 'aria-valuenow',
}

const defaultCircularProgressOptions = {
  kind: 'determinate' as Kind,
  max: 100,
  min: 0,
  now: 0,
  size: 'm' as Size,
  tech: '' as Tech,
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
  a11yOptions?: CircularProgressA11yOptions
) {
  return {
    [a11yPropMap.valueMax]: a11yOptions?.max,
    [a11yPropMap.valueMin]: a11yOptions?.min,
    [a11yPropMap.valueNow]: a11yOptions?.now,
    role: a11yRole,
  }
}
