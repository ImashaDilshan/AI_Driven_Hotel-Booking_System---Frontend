import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SignInPage from './pages/login.page.jsx'
import SignUpPage from './pages/sign-up.page.jsx'
import { BrowserRouter, Routes,Route } from 'react-router'
import Homepage from './pages/Home.page.jsx'
import Rootlayoutpage from './Layouts/root.layout.page.jsx'
import Notfoundpage from './pages/Not-found-page.jsx'
import Hotels from './pages/Hotels.page.jsx'
import Hoteldetailspage from './pages/Hotel-details.page.jsx'

import { store } from './lib/store.js'
import { Provider } from 'react-redux'


createRoot(document.getElementById('root')).render(
<StrictMode>
  <Provider store={store}>
  <BrowserRouter>
      <Routes>
        <Route element={< Rootlayoutpage/>} >
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<SignInPage/>} />
            <Route path="/signUp" element={<SignUpPage/>} />
            <Route path="/hotels" element={<Hotels/>} />
            <Route path="/hotels/:_id" element={<Hoteldetailspage/>} />  
        </Route>
            <Route path="*" element={<Notfoundpage/>} /> 
            / Use wildcard operator for 404 page
      </Routes>
  </BrowserRouter>
  </Provider>
</StrictMode>
  
)
