import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignInPage from './pages/login.page.jsx'
import SignUpPage from './pages/sign-up.page.jsx'
import { BrowserRouter, Routes,Route } from 'react-router'
import Homepage from './pages/Home.page.jsx'




createRoot(document.getElementById('root')).render(
<StrictMode>
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<SignInPage/>} />
        <Route path="/signUp" element={<SignUpPage/>} />
      </Routes>
  
  </BrowserRouter>
</StrictMode>
  
)
