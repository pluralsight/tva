import { getProgressProps, getJSProgressProps } from '../../../src'

const { classes, ...defaultA11y } = getProgressProps()
const { classes: xsStyles, ...xsA11y } = getProgressProps({
  now: 50,
  size: 'xs',
})
const { classes: xsInsetStyles, ...xsInsetA11y } = getProgressProps({
  kind: 'inset',
  now: 80,
  size: 'xs',
})
const { classes: insetStyles, ...insetA11y } = getProgressProps({
  kind: 'inset',
  now: 60,
})

export default function Progress(props) {
  if (props.logJS) {
    console.log({ ...getJSProgressProps({ kind: 'inset' }) })
  }

  return (
    <div id="progress">
      <h3>Progress</h3>
      <div className="App-container column">
        <div {...classes.wrapper}>
          <div {...defaultA11y} {...classes.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...xsStyles.wrapper}>
          <div {...xsA11y} {...xsStyles.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...xsInsetStyles.wrapper}>
          <div {...xsInsetA11y} {...xsInsetStyles.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...insetStyles.wrapper}>
          <div {...insetA11y} {...insetStyles.bar} />
        </div>
      </div>
    </div>
  )
}
