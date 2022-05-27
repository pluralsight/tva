import { useState } from 'react'
import { getButtonProps } from '../../src'
import Button from './components/Button'
import Badge from './components/Badge'
import CircularProgress from './components/CircularProgress'
import ErrorMessage from './components/ErrorMessage'
import FormControl from './components/FormControl'
import FormLabel from './components/FormLabel'
import Icon from './components/Icon'
import Progress from './components/Progress'
import Radio from './components/Radio'
import Skeleton from './components/Skeleton'
import Switch from './components/Switch'
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
      <CircularProgress />
      <ErrorMessage />
      <FormControl />
      <FormLabel />
      <Icon />
      <Progress />
      <Radio />
      <Skeleton />
      <Switch logJS />
    </div>
  )
}

export default App
