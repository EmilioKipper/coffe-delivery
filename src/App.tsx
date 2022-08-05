import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './routes';
import { ResetCSS } from './styles/Reset.styles';
import { theme } from './styles/theme';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
      <ResetCSS />
    </BrowserRouter>
  );
}

export default App;
