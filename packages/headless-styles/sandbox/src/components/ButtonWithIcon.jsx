import {
  getButtonWithIconProps,
  // getDangerButtonWithIconProps,
  getIconProps,
} from '../../../src'
import {
  PencilIcon,
  ChevronRightIcon,
  // DeleteIcon
} from '@pluralsight/icons'

function Button(props) {
  const { icon, label, side, ...buttonOptions } = props
  const { button, iconOptions } = getButtonWithIconProps({
    ...buttonOptions,
    ariaLabel: label,
  })
  const iconProps = getIconProps(iconOptions)
  const Icon = icon

  return (
    <button {...button}>
      {side !== 'end' && (
        <>
          <Icon {...iconProps} />
        </>
      )}
      {label}
      {side === 'end' && (
        <>
          <Icon {...iconProps} />
        </>
      )}
    </button>
  )
}

// function DangerButton(props) {
//   const { icon, label, side, ...buttonOptions } = props
//   const { button, iconOptions } = getDangerButtonWithIconProps({
//     ...buttonOptions,
//     ariaLabel: label,
//   })
//   const iconProps = getIconProps(iconOptions)
//   const Icon = icon

//   return (
//     <button {...button}>
//       {side !== 'end' && <Icon {...iconProps} />}
//       {label}
//       {side === 'end' && <Icon {...iconProps} />}
//     </button>
//   )
// }

export default function ButtonWithIcon() {
  return (
    <div id="button">
      <h3>Button with icon</h3>
      <div className="App-container">
        <Button icon={PencilIcon} label="Edit" />
        <Button icon={PencilIcon} label="Edit" kind="textWeak" />
        <Button icon={PencilIcon} label="Edit" kind="weak" />
        <Button icon={PencilIcon} label="Edit" kind="medium" />
        <Button icon={PencilIcon} label="Edit" kind="strong" />
      </div>
      <div className="App-container">
        <Button
          icon={ChevronRightIcon}
          label="Next"
          kind="medium"
          size="xs"
          side="end"
        />
        <Button
          icon={ChevronRightIcon}
          label="Next"
          kind="medium"
          size="s"
          side="end"
        />
        <Button
          icon={ChevronRightIcon}
          label="Next"
          kind="medium"
          size="m"
          side="end"
        />
        <Button
          icon={ChevronRightIcon}
          label="Next"
          kind="medium"
          size="l"
          side="end"
        />
      </div>
      {/* <div className="App-container">
        <DangerButton icon={DeleteIcon} label="Delete" />
        <DangerButton icon={DeleteIcon} label="Delete" kind="text" />
        <DangerButton icon={DeleteIcon} label="Delete" kind="medium" />
        <DangerButton icon={DeleteIcon} label="Delete" kind="strong" />
      </div>
      <div className="App-container">
        <DangerButton
          icon={DeleteIcon}
          label="Delete"
          kind="medium"
          size="xs"
        />
        <DangerButton icon={DeleteIcon} label="Delete" kind="medium" size="s" />
        <DangerButton icon={DeleteIcon} label="Delete" kind="medium" size="m" />
        <DangerButton icon={DeleteIcon} label="Delete" kind="medium" size="l" />
      </div> */}
    </div>
  )
}
