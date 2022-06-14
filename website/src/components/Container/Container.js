import React from 'react'
import styles from './Container.module.css'

const defaultProps = {
  alignItems: 'center',
  column: false,
  textAlign: 'center',
}

export default function Container(props = defaultProps) {
  const classes = props.column ? styles.column : styles.base
  return (
    <div
      className={classes}
      style={{
        alignItems: props.alignItems,
        textAlign: props.textAlign ?? 'center',
      }}
    >
      {props.children}
    </div>
  )
}
