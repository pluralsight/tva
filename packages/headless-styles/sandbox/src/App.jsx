import { useState } from 'react'
import './App.css'
import { getButtonProps } from '../../src'

function App() {
  const [theme, setTheme] = useState('dark')

  function handleToggleTheme() {
    setTheme((prev) => {
      if (prev === 'dark') {
        return 'light'
      }

      return 'dark'
    })
  }

  return (
    <div className={`App ${theme}`}>
      <header className="App-header">
        <button {...getButtonProps()} onClick={handleToggleTheme}>
          {theme === 'dark' ? '🌞' : '🌙'}
        </button>
      </header>
      <div className="App-container">
        <button {...getButtonProps()}>default</button>
        <button {...getButtonProps({ kind: 'text-weak' })}>text-weak</button>
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
    </div>
  )
}

export default App
