import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { ThemeContext } from '@emotion/react';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
   
)
