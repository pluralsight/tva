import { useEffect } from 'react'
import {
  getDangerIconButtonProps,
  getIconButtonProps,
  getIconProps,
  getJSDangerIconButtonProps,
  getJSIconButtonProps,
} from '../../../src'
import {
  ArrowDownRightIcon,
  CodeIcon,
  PluralsightIcon,
  ShareIcon,
} from '@pluralsight/icons'

const DANGER_BTN_KINDS = ['text', 'medium', 'strong']
const BTN_KINDS = ['text', 'textWeak', 'weak', 'medium', 'strong']
const BTN_SIZES = ['xs', 's', 'm', 'l']
const BTN_ICONS = [ArrowDownRightIcon, CodeIcon, PluralsightIcon, ShareIcon]

function getRandomArrayIdx(arr) {
  return Math.floor(Math.random() * arr.length)
}

function getRandomButton(isDanger) {
  return {
    kind: isDanger
      ? DANGER_BTN_KINDS[getRandomArrayIdx(DANGER_BTN_KINDS)]
      : BTN_KINDS[getRandomArrayIdx(BTN_KINDS)],
    icon: BTN_ICONS[getRandomArrayIdx(BTN_ICONS)],
    size: BTN_SIZES[getRandomArrayIdx(BTN_SIZES)],
  }
}

function PSIconButton(props) {
  const btn = getRandomButton()
  const buttonProps = getIconButtonProps({
    ...props,
    ...btn,
  })
  const Icon = btn.icon

  return (
    <button {...buttonProps.button}>
      <Icon {...getIconProps(buttonProps.iconOptions)} />
    </button>
  )
}

function PSDangerIconButton(props) {
  const btn = getRandomButton(true)
  const buttonProps = getDangerIconButtonProps({
    ...props,
    ...btn,
  })
  const Icon = btn.icon

  return (
    <button {...buttonProps.button}>
      <Icon {...getIconProps(buttonProps.iconOptions)} />
    </button>
  )
}

export default function IconButton({ logJS }) {
  useEffect(() => {
    if (logJS) {
      console.log({
        ...getJSIconButtonProps({
          ariaLabel: 'button',
          kind: 'medium',
          size: 'xs',
          variant: 'round',
        }),
      })
      console.log({
        ...getJSDangerIconButtonProps({
          ariaLabel: 'button',
          kind: 'medium',
          size: 'xs',
          variant: 'round',
        }),
      })
    }
  }, [logJS])

  return (
    <div id="icon-button">
      <h3>Icon Button</h3>
      <div className="App-container">
        <PSIconButton ariaLabel="default" />
        <PSIconButton ariaLabel="textWeak" />
        <PSIconButton ariaLabel="weak" />
        <PSIconButton ariaLabel="medium" />
        <PSIconButton ariaLabel="strong" />
      </div>
      <h3>Round Icon Button</h3>
      <div className="App-container">
        <PSIconButton ariaLabel="default round" variant="round" />
        <PSIconButton ariaLabel="textWeak round" variant="round" />
        <PSIconButton ariaLabel="weak round" variant="round" />
        <PSIconButton ariaLabel="medium round" variant="round" />
        <PSIconButton ariaLabel="strong round" variant="round" />
      </div>
      <h3>Danger Icon Button</h3>
      <div className="App-container">
        <PSDangerIconButton ariaLabel="default" />
        <PSDangerIconButton ariaLabel="textWeak" />
        <PSDangerIconButton ariaLabel="weak" />
        <PSDangerIconButton ariaLabel="medium" />
        <PSDangerIconButton ariaLabel="strong" />
      </div>
      <h3>Round Danger Icon Button</h3>
      <div className="App-container">
        <PSDangerIconButton ariaLabel="default round" variant="round" />
        <PSDangerIconButton ariaLabel="textWeak round" variant="round" />
        <PSDangerIconButton ariaLabel="weak round" variant="round" />
        <PSDangerIconButton ariaLabel="medium round" variant="round" />
        <PSDangerIconButton ariaLabel="strong round" variant="round" />
      </div>
    </div>
  )
}
