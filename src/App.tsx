import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { CardContextProvider } from './context/CartContext'
import { Router } from './Routes'
import { defaultTheme } from './styles/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CardContextProvider>
          <Router />
          <ToastContainer
          autoClose={2500}
          pauseOnHover={false}
          style={{ width: 'max-content' }}
        />
        </CardContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
