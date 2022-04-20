import { getBadgeProps, getJSBadgeProps } from '../../../src'

export default function Badge(props) {
  if (props.logJS) {
    console.log({ ...getJSBadgeProps({ kind: 'medium' }) })
  }

  return (
    <div id="badge">
      <h3>Badge</h3>
      <div className="App-container">
        <span {...getBadgeProps()}>Strong</span>
        <span {...getBadgeProps({ kind: 'medium' })}>Medium</span>
        <span {...getBadgeProps({ kind: 'weak' })}>Weak</span>
      </div>
    </div>
  )
}
