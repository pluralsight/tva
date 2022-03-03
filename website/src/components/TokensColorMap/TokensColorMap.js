import React from 'react'
import styles from './TokensColorMap.module.css'
import tokenData from './tokens.data.json'

const tokenKeys = Object.keys(tokenData)

function Label(props) {
  return <p className={styles.label}>{props.children}</p>
}

function ColorItem(props) {
  return (
    <li className={styles.item}>
      <div className={`${styles.swab} ${styles[props.id]}`} />
      <div className={styles.labelcontainer}>
        <Label>
          <span className={styles.syntax}>CSS:</span> {props.cssToken}
        </Label>
        <Label>
          <span className={styles.syntax}>SASS:</span> {props.sassToken}
        </Label>
        <Label>
          <span className={styles.syntax}>JS:</span> {props.jsToken}
        </Label>
      </div>
    </li>
  )
}

function TokensColorMap() {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.list}>
        {tokenKeys.map((token) => (
          <ColorItem key={token} {...tokenData[token]} />
        ))}
      </ul>
    </div>
  )
}

export default TokensColorMap
