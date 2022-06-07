import { getIconButtonProps, getIconProps } from '../../../src'
import {
  ArrowDownRightIcon,
  CodeIcon,
  PluralsightIcon,
  ShareIcon,
} from '@pluralsight/icons'

const BTN_KINDS = ['text', 'textWeak', 'weak', 'medium', 'strong']
const BTN_SIZES = ['xs', 's', 'm', 'l']
const BTN_ICONS = [ArrowDownRightIcon, CodeIcon, PluralsightIcon, ShareIcon]

function getRandomArrayIdx(arr) {
  return Math.floor(Math.random() * arr.length)
}

function getRandomButton() {
  return {
    kind: BTN_KINDS[getRandomArrayIdx(BTN_KINDS)],
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

  console.log(btn, buttonProps)

  return (
    <button {...buttonProps.button}>
      <Icon {...getIconProps(buttonProps.iconOptions)} />
    </button>
  )
}

export default function IconButton() {
  // if (props.logJS) {
  //   console.log({ ...getJSIconButtonProps({ ariaLabel: 'button', kind: 'medium', size: 'xs', variant: 'round' }) })
  // }

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
    </div>
  )
}
