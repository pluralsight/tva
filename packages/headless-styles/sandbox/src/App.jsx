import { useState } from 'react'
import { getButtonProps } from '../../src'
import Button from './components/Button'
import ButtonWithIcon from './components/ButtonWithIcon'
import Badge from './components/Badge'
import Checkbox from './components/Checkbox'
import CircularProgress from './components/CircularProgress'
import ErrorMessage from './components/ErrorMessage'
import FieldMessage from './components/FieldMessage'
import FormControl from './components/FormControl'
import FormLabel from './components/FormLabel'
import Icon from './components/Icon'
import IconButton from './components/IconButton'
import Input from './components/Input'
import Progress from './components/Progress'
import Radio from './components/Radio'
import Skeleton from './components/Skeleton'
import Switch from './components/Switch'
import Textarea from './components/Textarea'
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
      <ButtonWithIcon logJS />
      <Checkbox />
      <CircularProgress />
      <ErrorMessage />
      <FieldMessage />
      <FormControl />
      <FormLabel />
      <Icon />
      <IconButton />
      <Input />
      <Progress />
      <Radio />
      <Skeleton />
      <Switch />
      <Textarea />
    </div>
  )
}

export default App
