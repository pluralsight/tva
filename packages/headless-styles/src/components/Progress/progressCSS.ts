import { createClassProp } from '../../utils/helpers'
import { getA11yProgressProps, getDefaultProgressOptions } from './shared'
import type { ProgressOptions } from './types'
import styles from './progressCSS.module.css'

const PROGRESS = 'ps-progress'

export function getProgressProps(options?: ProgressOptions) {
  const { kind, size, tech, ...a11y } = getDefaultProgressOptions(options)
  const a11yProps = getA11yProgressProps(a11y)
  const sizeClass = `${size}Size`
  const style = {
    width: `${a11y.now}%`,
  }

  return {
    bar: {
      ...a11yProps,
      ...createClassProp(
        {
          svelteClass: `${PROGRESS} bar ${sizeClass} ${kind}`,
          defaultClass: `${PROGRESS} ${styles[sizeClass]} ${styles[kind]}`,
        },
        tech
      ),
      style,
    },
    wrapper: createClassProp(
      {
        svelteClass: `${PROGRESS} wrapper ${sizeClass} ${kind}`,
        defaultClass: `${PROGRESS} ${styles.wrapper} ${styles[sizeClass]} ${styles[kind]}`,
      },
      tech
    ),
  }
}
