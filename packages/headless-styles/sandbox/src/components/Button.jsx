import {
  getButtonProps,
  getDangerButtonProps,
  getJSButtonProps,
} from '../../../src'

export default function Button(props) {
  if (props.logJS) {
    console.log({ ...getJSButtonProps({ kind: 'medium', size: 'xs' }) })
  }

  return (
    <div id="button">
      <h3>Button</h3>
      <div className="App-container">
        <button {...getButtonProps()}>default</button>
        <button {...getButtonProps({ kind: 'textWeak' })}>text-weak</button>
        <button {...getButtonProps({ kind: 'weak' })}>weak</button>
        <button {...getButtonProps({ kind: 'medium' })}>medium</button>
        <button {...getButtonProps({ kind: 'strong' })}>strong</button>
      </div>
      <div className="App-container">
        <button {...getButtonProps({ kind: 'medium', size: 'xs' })}>
          xtra-small
        </button>
        <button {...getButtonProps({ kind: 'medium', size: 's' })}>
          small
        </button>
        <button {...getButtonProps({ kind: 'medium', size: 'm' })}>
          medium
        </button>
        <button {...getButtonProps({ kind: 'medium', size: 'l' })}>
          large
        </button>
      </div>
      <div className="App-container">
        <button {...getDangerButtonProps()}>default</button>
        <button {...getDangerButtonProps({ kind: 'text' })}>weak</button>
        <button {...getDangerButtonProps({ kind: 'medium' })}>medium</button>
        <button {...getDangerButtonProps({ kind: 'strong' })}>strong</button>
      </div>
      <div className="App-container">
        <button {...getDangerButtonProps({ kind: 'medium', size: 'xs' })}>
          xtra-small
        </button>
        <button {...getDangerButtonProps({ kind: 'medium', size: 's' })}>
          small
        </button>
        <button {...getDangerButtonProps({ kind: 'medium', size: 'm' })}>
          medium
        </button>
        <button {...getDangerButtonProps({ kind: 'medium', size: 'l' })}>
          large
        </button>
      </div>
    </div>
  )
}
