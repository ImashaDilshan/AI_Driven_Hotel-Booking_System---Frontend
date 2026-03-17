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
import { ClerkProvider } from '@clerk/clerk-react'
import { store } from './lib/store.js'
import { Provider } from 'react-redux'
import ProtectLayout from './Layouts/protect.layout.jsx'
import AdminProtect_layout from './Layouts/AdminProtect_layout.jsx'
import CreateHotels from './pages/AdminPages/Hotel-create-page.jsx'


// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')).render(
<StrictMode>
 <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
  <Provider store={store}>
  <BrowserRouter>
      <Routes>
        <Route element={< Rootlayoutpage/>} >
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<SignInPage/>} />
            <Route path="/signUp" element={<SignUpPage/>} />
            <Route path="/hotels" element={<Hotels/>} />
            <Route element={<ProtectLayout />}>
              <Route path="/hotels/:_id" element={<Hoteldetailspage/>} />
              <Route element={<AdminProtect_layout/>}>
                <Route path="/admin/create-hotel" element={<CreateHotels/>} />
              </Route>
            </Route>
        </Route>
            <Route path="*" element={<Notfoundpage/>} /> 
            / Use wildcard operator for 404 page
      </Routes>
  </BrowserRouter>
  </Provider>
  </ClerkProvider>
</StrictMode>
  
)
