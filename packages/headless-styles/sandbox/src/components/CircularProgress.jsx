import { getCircularProgressProps } from '../../../src'

function CircleProgress(props) {
  const determinateProps = getCircularProgressProps(props)

  return (
    <div {...determinateProps.containerProps}>
      <svg {...determinateProps.svgBoxProps}>
        <circle {...determinateProps.baseCircleProps} />
        <circle {...determinateProps.nowCircleProps} />
      </svg>
      {props.showValue && (
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

      <CircleProgress now={32} />
      <CircleProgress now={50} showValue />
      <CircleProgress kind="indeterminate" />
    </div>
  )
}
