import type { CSSProperties, SVGProps as SVGPropsReact } from 'react'

export interface SVGProps<T> extends SVGPropsReact<T> {
  style?: CSSProperties | Record<string, string>
}
