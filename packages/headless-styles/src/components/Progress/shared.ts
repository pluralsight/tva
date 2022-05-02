import type {
  ProgressA11yOptions,
  ProgressOptions,
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

const defaultProgressOptions = {
  kind: 'linear' as Kind,
  max: 100,
  min: 0,
  now: 0,
  size: 's' as Size,
  tech: '' as Tech,
}

export function getDefaultProgressOptions(options?: ProgressOptions) {
  return {
    kind: options?.kind ?? defaultProgressOptions.kind,
    max: options?.max ?? defaultProgressOptions.max,
    min: options?.min ?? defaultProgressOptions.min,
    now: options?.now ?? defaultProgressOptions.now,
    size: options?.size ?? defaultProgressOptions.size,
    tech: options?.tech ?? defaultProgressOptions.tech,
  }
}

export function getA11yProgressProps(a11yOptions?: ProgressA11yOptions) {
  return {
    [a11yPropMap.valueMax]: a11yOptions?.max,
    [a11yPropMap.valueMin]: a11yOptions?.min,
    [a11yPropMap.valueNow]: a11yOptions?.now,
    role: a11yRole,
  }
}
