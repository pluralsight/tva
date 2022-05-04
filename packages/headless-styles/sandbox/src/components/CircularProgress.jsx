import { getCircularProgressProps } from '../../../src'

function CircleProgress(props) {
  const determinateProps = getCircularProgressProps(props)

  return (
    <div {...determinateProps.containerProps}>
      <svg {...determinateProps.svgBoxProps}>
        <circle {...determinateProps.baseCircleProps} />
        <circle {...determinateProps.nowCircleProps} />
      </svg>
      {props.showValue && props.size === 's' && (
        <span {...determinateProps.labelProps}>
          {determinateProps.labelProps.value}
        </span>
      )}
    </div>
  )
}

export default function CircularProgress(props) {
  return (
    <div id="progress">
      <h3>Circular Progress</h3>

      <div className="App-container">
        <CircleProgress now={32} />
        <CircleProgress now={50} showValue />
        <CircleProgress kind="indeterminate" />
      </div>
      <div className="App-container">
        <CircleProgress size="xs" now={32} />
        <CircleProgress size="xs" now={50} showValue />
        <CircleProgress size="xs" kind="indeterminate" />
      </div>
    </div>
  )
}
