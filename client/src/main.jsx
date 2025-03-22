import { createRoot } from 'react-dom/client'
import AppContextProvider from './context/Appcontext.jsx'

import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <AppContextProvider>
    <App />
    </AppContextProvider>
    </BrowserRouter>
 
)
