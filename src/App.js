import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/style.scss';
import { Login } from './pages/Login';
import { ThemeProvider, createTheme } from '@mui/material';
import { SignUp } from './pages/SignUp';
import { CvBuilder } from './pages/CvBuilder';

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#fa7062'
      }
    }
  });
  return (
    <ThemeProvider  theme={theme}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route exact path="/cv" element={<CvBuilder />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
