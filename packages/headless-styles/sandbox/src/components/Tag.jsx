import { getTagProps } from '../../../src'

export default function Tag() {
  return (
    <div id="tag">
      <h3>Tag</h3>
      <div className="App-container">
        <a href="#tag" {...getTagProps()}>
          default
        </a>
        <a href="#tag" {...getTagProps({ kind: 'weak' })}>
          weak
        </a>
        <a href="#tag" {...getTagProps({ kind: 'strong' })}>
          strong
        </a>
      </div>
      <div className="App-container">
        <a href="#tag" {...getTagProps({ size: 's' })}>
          small
        </a>
        <a href="#tag" {...getTagProps({ size: 'm' })}>
          medium
        </a>
      </div>
    </div>
  )
}
