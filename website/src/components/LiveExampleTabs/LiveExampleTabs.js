import React, { useState } from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import styles from './LiveExampleTabs.module.css'

const codeIcon = (
  <svg
    className={styles.icon}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="CodeRoundedIcon"
  >
    <path d="M8.7 15.9 4.8 12l3.9-3.9c.39-.39.39-1.01 0-1.4a.9839.9839 0 0 0-1.4 0l-4.59 4.59c-.39.39-.39 1.02 0 1.41l4.59 4.6c.39.39 1.01.39 1.4 0 .39-.39.39-1.01 0-1.4zm6.6 0 3.9-3.9-3.9-3.9a.9839.9839 0 0 1 0-1.4c.39-.39 1.01-.39 1.4 0l4.59 4.59c.39.39.39 1.02 0 1.41l-4.59 4.6c-.39.39-1.01.39-1.4 0a.9839.9839 0 0 1 0-1.4z"></path>
  </svg>
)
const sandboxIcon = (
  <svg
    className={styles.icon}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 1024 1024"
  >
    <path d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"></path>
  </svg>
)

function getSandboxLink(id) {
  return `https://codesandbox.io/s/${id}?file=/src/App.tsx`
}

const tabs = {
  items: ['source', 'styled', 'chakra', 'joy', 'svelte'],
  results: {
    source: {
      icon: codeIcon,
      id: 'source',
      href: '',
      label: 'Show full source',
    },
    styled: {
      icon: sandboxIcon,
      id: 'styled',
      href: getSandboxLink('basic-button-css-zsn9cx'),
      label: 'View styled components 💅',
    },
    chakra: {
      icon: sandboxIcon,
      id: 'chakra',
      href: getSandboxLink('basic-button-css-zsn9cx1'),
      label: 'View Chakra',
    },
    joy: {
      icon: sandboxIcon,
      id: 'joy',
      href: getSandboxLink('basic-button-css-zsn9cx2'),
      label: 'View MUI / Joy',
    },
    svelte: {
      icon: sandboxIcon,
      id: 'svelte',
      href: getSandboxLink('basic-button-css-zsn9cx3'),
      label: 'View Svelte',
    },
  },
}

function TechLink(props) {
  const data = tabs.results[props.techId]
  const { className } = getButtonProps({ size: 'xs' })

  return (
    <a
      aria-label={data.label}
      className={`${className} ${styles.button}`}
      href={data.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {props.children}
    </a>
  )
}

function TechIcon(props) {
  return tabs.results[props.tabId].icon
}

function TechToolbar(props) {
  const { className, ...psBtnProps } = { ...getButtonProps({ size: 'xs' }) }

  return (
    <ul className={styles.list}>
      {tabs.items.map((techId) => (
        <li className={styles.listItem} key={techId}>
          {techId === 'source' ? (
            <button
              className={`${className} ${styles.button}`}
              onClick={props.onToggleShow}
              {...psBtnProps}
            >
              <TechIcon tabId={techId} />
            </button>
          ) : (
            <TechLink techId={techId}>
              <TechIcon tabId={techId} />
            </TechLink>
          )}
        </li>
      ))}
    </ul>
  )
}

function LiveExampleTabs(props) {
  const [showFull, setShowFull] = useState(false)

  function handleToggleShow() {
    setShowFull((prev) => !prev)
  }

  return (
    <div>
      <TechToolbar onToggleShow={handleToggleShow} />
      {showFull ? props.fullCode : props.children}
    </div>
  )
}

export default LiveExampleTabs
