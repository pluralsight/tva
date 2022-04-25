import React, { memo, useState } from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import styles from './LiveExampleTabs.module.css'

const codeIcon = (
  <svg
    aria-hidden="true"
    className={styles.icon}
    focusable="false"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="m14.266 4.311.94.342a.5.5 0 0 1 .299.641l-5.13 14.096a.5.5 0 0 1-.641.299l-.94-.343a.5.5 0 0 1-.299-.64l5.13-14.096a.5.5 0 0 1 .641-.299zm1.791 11.044.798.793a.5.5 0 0 0 .706-.002l3.788-3.802a.5.5 0 0 0 0-.707L17.56 7.853a.5.5 0 0 0-.706 0l-.796.794a.5.5 0 0 0 0 .708l2.642 2.639-2.644 2.654a.5.5 0 0 0 .001.707zm-8.706.793.797-.793a.5.5 0 0 0 .001-.707l-2.644-2.654 2.642-2.64a.5.5 0 0 0 0-.707l-.795-.794a.5.5 0 0 0-.707 0l-3.788 3.784a.5.5 0 0 0-.001.707l3.788 3.802a.5.5 0 0 0 .707.002z"
    ></path>
  </svg>
)
const sandboxIcon = (
  <svg
    aria-hidden="true"
    className={styles.icon}
    focusable="false"
    viewBox="0 0 1024 1024"
  >
    <path d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"></path>
  </svg>
)
const svelteLogo = (
  <svg
    aria-hidden="true"
    className={`${styles.icon}`}
    fill="none"
    focusable="false"
    viewBox="0 0 98.1 118"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      className={styles.svelteOutline}
      d="M91.8 15.6C80.9-.1 59.2-4.7 43.6 5.2L16.1 22.8C8.6 27.5 3.4 35.2 1.9 43.9c-1.3 7.3-.2 14.8 3.3 21.3-2.4 3.6-4 7.6-4.7 11.8-1.6 8.9.5 18.1 5.7 25.4 11 15.7 32.6 20.3 48.2 10.4l27.5-17.5c7.5-4.7 12.7-12.4 14.2-21.1 1.3-7.3.2-14.8-3.3-21.3 2.4-3.6 4-7.6 4.7-11.8 1.7-9-.4-18.2-5.7-25.5"
    />
    <path
      className={styles.svelteBackground}
      d="M40.9 103.9c-8.9 2.3-18.2-1.2-23.4-8.7-3.2-4.4-4.4-9.9-3.5-15.3.2-.9.4-1.7.6-2.6l.5-1.6 1.4 1c3.3 2.4 6.9 4.2 10.8 5.4l1 .3-.1 1c-.1 1.4.3 2.9 1.1 4.1 1.6 2.3 4.4 3.4 7.1 2.7.6-.2 1.2-.4 1.7-.7L65.5 72c1.4-.9 2.3-2.2 2.6-3.8.3-1.6-.1-3.3-1-4.6-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7l-10.5 6.7c-1.7 1.1-3.6 1.9-5.6 2.4-8.9 2.3-18.2-1.2-23.4-8.7-3.1-4.4-4.4-9.9-3.4-15.3.9-5.2 4.1-9.9 8.6-12.7l27.5-17.5c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.2.9-.4 1.7-.7 2.6l-.5 1.6-1.4-1c-3.3-2.4-6.9-4.2-10.8-5.4l-1-.3.1-1c.1-1.4-.3-2.9-1.1-4.1-1.6-2.3-4.4-3.3-7.1-2.6-.6.2-1.2.4-1.7.7L32.4 46.1c-1.4.9-2.3 2.2-2.6 3.8s.1 3.3 1 4.6c1.6 2.3 4.4 3.3 7.1 2.6.6-.2 1.2-.4 1.7-.7l10.5-6.7c1.7-1.1 3.6-1.9 5.6-2.5 8.9-2.3 18.2 1.2 23.4 8.7 3.2 4.4 4.4 9.9 3.5 15.3-.9 5.2-4.1 9.9-8.6 12.7l-27.5 17.5c-1.7 1.1-3.6 1.9-5.6 2.5"
    />
  </svg>
)
const chakraLogo = (
  <svg
    aria-hidden="true"
    className={`${styles.icon} ${styles.chakra}`}
    fill="none"
    focusable="false"
    viewBox="0 0 582 582"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect className={styles.chakraCircle} width="582" height="582" rx="291" />
    <path d="M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z" />
  </svg>
)

const muiLogo = (
  <svg
    aria-hidden="true"
    className={styles.icon}
    fill="none"
    focusable="false"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 32"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M30.343 21.976a1 1 0 00.502-.864l.018-5.787a1 1 0 01.502-.864l3.137-1.802a1 1 0 011.498.867v10.521a1 1 0 01-.502.867l-11.839 6.8a1 1 0 01-.994.001l-9.291-5.314a1 1 0 01-.504-.868v-5.305c0-.006.007-.01.013-.007.005.003.012 0 .012-.007v-.006c0-.004.002-.008.006-.01l7.652-4.396c.007-.004.004-.015-.004-.015a.008.008 0 01-.008-.008l.015-5.201a1 1 0 00-1.5-.87l-5.687 3.277a1 1 0 01-.998 0L6.666 9.7a1 1 0 00-1.499.866v9.4a1 1 0 01-1.496.869l-3.166-1.81a1 1 0 01-.504-.87l.028-16.43A1 1 0 011.527.86l10.845 6.229a1 1 0 00.996 0L24.21.86a1 1 0 011.498.868v16.434a1 1 0 01-.501.867l-5.678 3.27a1 1 0 00.004 1.735l3.132 1.783a1 1 0 00.993-.002l6.685-3.839zM31 7.234a1 1 0 001.514.857l3-1.8A1 1 0 0036 5.434V1.766A1 1 0 0034.486.91l-3 1.8a1 1 0 00-.486.857v3.668z"
      fill="#007FFF"
    ></path>
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
      icon: chakraLogo,
      id: 'chakra',
      label: 'View Chakra',
    },
    joy: {
      icon: muiLogo,
      id: 'joy',
      label: 'View MUI / Joy',
    },
    svelte: {
      icon: svelteLogo,
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
      name={data.label}
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
