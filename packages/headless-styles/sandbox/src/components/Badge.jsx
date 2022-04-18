import { getBadgeProps } from '../../../src'

export default function Badge() {
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
