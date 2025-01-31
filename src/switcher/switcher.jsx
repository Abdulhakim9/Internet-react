
import { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode'
import useDarkSide from '../useDarkSide/useDarkSide'

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkSide()
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  )

  const toggleDarkMode = checked => {
    setTheme(colorTheme)
    setDarkSide(checked)
  }

  return (
    <>
      <div>
        <DarkModeSwitch
          size={30}
          checked={darkSide}
          onChange={toggleDarkMode}
        />
      </div>
    </>
  )
}
