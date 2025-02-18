import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom';
import LoggedIn from './LoggedIn.JSX'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    {/* <App /> */}

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />

        <Route path="/loggedIn" element={<LoggedIn />} />



      </Routes>





    </BrowserRouter>




  </StrictMode >,
)
