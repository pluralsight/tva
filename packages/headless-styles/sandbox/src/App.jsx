import { useState } from 'react'
import { getButtonProps } from '../../src'
import Button from './components/Button'
import Badge from './components/Badge'
import Skeleton from './components/Skeleton'
import './App.css'

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

      <Badge />
      <Button />
      <Skeleton logJS />
    </div>
  )
}

export default App
