import React, { memo, useState } from 'react'
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
      label: 'View styled components 💅',
    },
    chakra: {
      icon: sandboxIcon,
      id: 'chakra',
      label: 'View Chakra',
    },
    joy: {
      icon: sandboxIcon,
      id: 'joy',
      label: 'View MUI / Joy',
    },
    svelte: {
      icon: sandboxIcon,
      id: 'svelte',
      label: 'View Svelte',
    },
  },
}

function TechLink(props) {
  const data = tabs.results[props.techId]
  const { className } = getButtonProps({ size: 'xs' })
  const href = getSandboxLink(props.href)

  return (
    <a
      aria-label={data.label}
      className={`${className} ${styles.button}`}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      title={data.label}
    >
      {props.children}
    </a>
  )
}

function ToggleButton(props) {
  const { techId } = props
  const { className, ...psBtnProps } = { ...getButtonProps({ size: 'xs' }) }

  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={props.onToggleShow}
      title={tabs.results[techId].label}
      {...psBtnProps}
    >
      <TechIcon tabId={techId} />
    </button>
  )
}

function TechIcon(props) {
  return tabs.results[props.tabId].icon
}

function TechListItem(props) {
  const { techId } = props

  return (
    <li className={styles.listItem}>
      {techId === 'source' ? (
        <ToggleButton onToggleShow={props.onToggleShow} techId={techId} />
      ) : (
        <TechLink techId={techId} href={props.sandboxList[techId]}>
          <TechIcon tabId={techId} />
        </TechLink>
      )}
    </li>
  )
}

function TechToolbar(props) {
  return (
    <ul className={styles.list}>
      {tabs.items.map((techId) => (
        <TechListItem
          key={techId}
          onToggleShow={props.onToggleShow}
          sandboxList={props.sandboxList}
          techId={techId}
        />
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
      <TechToolbar
        onToggleShow={handleToggleShow}
        sandboxList={props.sandboxList}
      />
      {showFull ? props.fullCode : props.children}
    </div>
  )
}

export default memo(LiveExampleTabs)
