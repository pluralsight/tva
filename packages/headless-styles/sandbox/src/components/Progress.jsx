import { getProgressProps } from '../../../src'

const { styles, ...defaultA11y } = getProgressProps()
const { styles: xsStyles, ...xsA11y } = getProgressProps({
  now: 50,
  size: 'xs',
})

const { styles: insetStyles, ...insetA11y } = getProgressProps({
  kind: 'inset',
  now: 60,
})

const { styles: xsInsetStyles, ...xsInsetA11y } = getProgressProps({
  kind: 'inset',
  now: 80,
  size: 'xs',
})

export default function Progress(props) {
  // if (props.logJS) {
  //   console.log({ ...getJSBadgeProps({ kind: 'medium' }) })
  // }

  return (
    <div id="progress">
      <h3>Progress</h3>
      <div className="App-container column">
        <div {...styles.wrapper}>
          <div {...defaultA11y} {...styles.bar} />
        </div>
      </div>
      <div className="App-container column">
        <div {...xsStyles.wrapper}>
          <div {...xsA11y} {...xsStyles.bar} style={{ width: '50%' }} />
        </div>
      </div>
      <div className="App-container column">
        <div {...xsInsetStyles.wrapper}>
          <div
            {...xsInsetA11y}
            {...xsInsetStyles.bar}
            style={{ width: '60%' }}
          />
        </div>
      </div>
      <div className="App-container column">
        <div {...insetStyles.wrapper}>
          <div {...insetA11y} {...insetStyles.bar} style={{ width: '80%' }} />
        </div>
      </div>
    </div>
  )
}
