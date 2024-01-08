import './App.css'
import Home from './pages/Home'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from './theme'

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
