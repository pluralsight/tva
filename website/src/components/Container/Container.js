import React from 'react'
import styles from './Container.module.css'

export default function Container(props) {
  return <div className={styles.base}>{props.children}</div>
}
