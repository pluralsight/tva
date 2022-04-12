import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from '../components/HomepageFeatures'
import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.container)}>
        <div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className={clsx('hero__subtitle', styles.heroSub)}>
            {siteConfig.tagline}
          </p>
        </div>
        <div className={styles.hero__img} />
      </div>
    </header>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="The official design guides and developer tool suite for Pluralsight."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
