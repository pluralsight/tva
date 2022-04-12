import React from 'react'
import clsx from 'clsx'
import styles from './HomepageFeatures.module.css'

const FeatureList = [
  {
    title: 'Design',
    description: (
      <>
        Check out all our design resources in <strong>Foundations</strong>,{' '}
        <strong>Content</strong>, and <strong>Components</strong>.
      </>
    ),
  },
  {
    title: 'Development',
    description: (
      <>
        View our flexible UI tool suite to build a PS branded app in{' '}
        <strong>Development</strong>.
      </>
    ),
  },
  {
    title: 'Announcements',
    description: (
      <>
        Stay up to date with our latest development releases in the{' '}
        <strong>Blog</strong> tab.
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
