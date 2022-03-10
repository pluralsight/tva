import React from 'react'
import styles from './TokensColorMap.module.css'
import tokenData from './tokens.data.json'

function Label(props) {
  return <p className={styles.label}>{props.children}</p>
}

function ColorSection(props) {
  const { items } = props
  const results = Object.keys(items)

  return (
    <section>
      <h3>{props.category}</h3>
      <ul className={styles.list}>
        {results.map((color) => (
          <ColorItem {...items[color]} key={items[color].id} />
        ))}
      </ul>
    </section>
  )
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
      {tokenData.categories.map((category) => (
        <ColorSection
          category={category}
          items={tokenData[category]}
          key={category}
        />
      ))}
    </div>
  )
}

export default TokensColorMap
