import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartContextProvider } from './contexts/CartContext';
import { Router } from './routes';
import { ResetCSS } from './styles/Reset.styles';
import { theme } from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </CartContextProvider>
      <ResetCSS />
    </BrowserRouter>
  );
}

export default App;
