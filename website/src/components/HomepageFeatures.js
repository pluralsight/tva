import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Easy to Use',
    description: (
      <>
        This system was designed to be your one stop shop whether you're a
        designer or developer!
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    description: (
      <>
        Foundations, Content, and Components are design resources and everything
        a developer needs is in Development.
      </>
    ),
  },
  {
    title: 'Compound Design',
    description: (
      <>
        Extend or customize our library suite to fit your needs. Use one or
        combine them all to make your own powerful solution.
      </>
    ),
  },
]

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4', styles.card)}>
      <div className="text--left padding-horiz--md card__text">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.row)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
