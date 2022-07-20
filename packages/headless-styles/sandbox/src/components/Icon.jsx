import { getIconProps, getJSIconProps } from '../../../src'
import { PluralsightIcon } from '@pluralsight/icons'

export default function Icon(props) {
  if (props.logJS) {
    console.log({ ...getJSIconProps({ size: 's' }) })
  }

  return (
    <div id="icon">
      <h3>Icon</h3>
      <div className="App-container">
        <PluralsightIcon {...getIconProps({ ariaLabel: 'small', size: 's' })} />
        <PluralsightIcon
          {...getIconProps({ ariaLabel: 'medium (default)', size: 'm' })}
        />
        <PluralsightIcon {...getIconProps({ ariaLabel: 'large', size: 'l' })} />
        <PluralsightIcon
          {...getIconProps({ ariaLabel: 'custom', customSize: '5rem' })}
        />
        <PluralsightIcon
          style={
            getJSIconProps({ ariaLabel: 'custom JS', customSize: '5rem' })
              .styles
          }
        />
      </div>
    </div>
  )
}
