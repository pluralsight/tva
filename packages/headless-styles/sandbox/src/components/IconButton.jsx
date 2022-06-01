import {
  getIconButtonProps,
  getIconProps,
  getJSIconButtonProps,
} from '../../../src'
import { CodeIcon } from '@pluralsight/icons'

function PSIconButton(props) {
  const { button, iconOptions } = getIconButtonProps(props)

  return (
    <button {...button}>
      <CodeIcon {...getIconProps(iconOptions)} />
    </button>
  )
}

export default function IconButton(props) {
  if (props.logJS) {
    console.log({
      ...getJSIconButtonProps({
        ariaLabel: 'button',
        kind: 'medium',
        size: 'xs',
        variant: 'round',
      }),
    })
  }

  return (
    <div id="icon-button">
      <h3>Icon Button</h3>
      <div className="App-container">
        <PSIconButton ariaLabel="default" />
        <PSIconButton ariaLabel="textWeak" kind="textWeak" />
        <PSIconButton ariaLabel="weak" kind="weak" />
        <PSIconButton ariaLabel="medium" kind="medium" />
        <PSIconButton ariaLabel="strong" kind="strong" />
      </div>
      <div className="App-container">
        <PSIconButton ariaLabel="extra small" kind="medium" size="xs" />
        <PSIconButton ariaLabel="small" kind="medium" size="s" />
        <PSIconButton ariaLabel="medium" kind="medium" size="m" />
        <PSIconButton ariaLabel="large" kind="medium" size="l" />
      </div>
      <h3>Round Icon Button</h3>
      <div className="App-container">
        <PSIconButton ariaLabel="default round" variant="round" />
        <PSIconButton
          ariaLabel="textWeak round"
          kind="textWeak"
          variant="round"
        />
        <PSIconButton ariaLabel="weak round" kind="weak" variant="round" />
        <PSIconButton ariaLabel="medium round" kind="medium" variant="round" />
        <PSIconButton ariaLabel="strong round" kind="strong" variant="round" />
      </div>
      <div className="App-container">
        <PSIconButton
          ariaLabel="extra small round"
          kind="medium"
          size="xs"
          variant="round"
        />
        <PSIconButton
          ariaLabel="small round"
          kind="medium"
          size="s"
          variant="round"
        />
        <PSIconButton
          ariaLabel="medium round"
          kind="medium"
          size="m"
          variant="round"
        />
        <PSIconButton
          ariaLabel="large round"
          kind="medium"
          size="l"
          variant="round"
        />
      </div>
    </div>
  )
}
