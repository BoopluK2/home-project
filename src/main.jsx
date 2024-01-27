import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import HouseContextProvider from './components/HouseContext';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
  <HouseContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HouseContextProvider>
</Router>
)
