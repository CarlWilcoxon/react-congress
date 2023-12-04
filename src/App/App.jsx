import logo from '../logo.svg';
import './App.css';
import TabsRouter from '../Router/Router';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material';


function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  

  return (
    <div className="App">
        <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <header className="App-header">
          <TabsRouter />
        </header>
        <main className='App-main'>
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
