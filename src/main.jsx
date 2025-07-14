import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import "react-toastify/dist/ReactToastify.css";
import App from './App.jsx'
import { ToastContainer } from 'react-toastify';
import ThemeProvider from './Context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
    <ToastContainer />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
