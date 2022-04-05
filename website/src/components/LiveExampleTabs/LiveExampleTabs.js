import React, { memo, useState } from 'react'
import { getButtonProps } from '@pluralsight/headless-styles'
import styles from './LiveExampleTabs.module.css'

const codeIcon = (
  <svg
    className={styles.icon}
    focusable="false"
    aria-hidden="true"
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
    className={styles.icon}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 1024 1024"
  >
    <path d="M755 140.3l0.5-0.3h0.3L512 0 268.3 140h-0.3l0.8 0.4L68.6 256v512L512 1024l443.4-256V256L755 140.3z m-30 506.4v171.2L548 920.1V534.7L883.4 341v215.7l-158.4 90z m-584.4-90.6V340.8L476 534.4v385.7L300 818.5V646.7l-159.4-90.6zM511.7 280l171.1-98.3 166.3 96-336.9 194.5-337-194.6 165.7-95.7L511.7 280z"></path>
  </svg>
)

const chakraLogo = (
  <svg
    className={`${styles.icon} ${styles.chakra}`}
    viewBox="0 0 582 582"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    focusable="false"
    aria-hidden="true"
  >
    <rect className={styles.chakraCircle} width="582" height="582" rx="291" />
    <path d="M157.521 303.421L355.881 106.426C359.587 102.746 365.55 107.225 363.049 111.809L289.22 247.123C287.573 250.141 289.758 253.821 293.196 253.821H420.782C424.892 253.821 426.877 258.857 423.872 261.661L200.293 470.326C196.284 474.067 190.317 468.796 193.536 464.356L299.373 318.351C301.543 315.357 299.404 311.164 295.706 311.164H160.713C156.67 311.164 154.653 306.27 157.521 303.421Z" />
  </svg>
)

const muiLogo = (
  <svg
    className={styles.icon}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 36 32"
    fill="none"
    focusable="false"
    aria-hidden="true"
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
