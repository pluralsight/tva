import { getProgressProps } from '../../../src'

const defaultBarProps = getProgressProps()
const xsBarProps = getProgressProps({ size: 'xs' })
const insetBarProps = getProgressProps({ kind: 'inset' })
const insetXSBarProps = getProgressProps({ kind: 'inset', size: 'xs' })

export default function Progress(props) {
  // if (props.logJS) {
  //   console.log({ ...getJSBadgeProps({ kind: 'medium' }) })
  // }

  return (
    <div id="progress">
      <h3>Progress</h3>
      <div className="App-container column">
        <div {...xsBarProps.wrapper}>
          <div {...xsBarProps.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...defaultBarProps.wrapper}>
          <div {...defaultBarProps.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...insetXSBarProps.wrapper}>
          <div {...insetXSBarProps.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...insetBarProps.wrapper}>
          <div {...insetBarProps.bar} />
        </div>
      </div>
    </div>
  )
}
