import React, { Children } from 'react'
import { ThemeProvider } from 'styled-components'
import { Box } from './assets/Calculator/Box'
import theme from './styled/theme'
import GlobalStyle  from './styled/global'

export const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <GlobalStyle/>
      <Box/>
    </div>
    </ThemeProvider>
  )
}


