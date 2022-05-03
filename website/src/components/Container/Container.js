import React from 'react'
import styles from './Container.module.css'

const defaultProps = {
  column: false,
}

export default function Container(props = defaultProps) {
  const classes = props.column ? styles.column : styles.base
  return <div className={classes}>{props.children}</div>
}
