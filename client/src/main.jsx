
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppContextProvider } from './context/AppContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import {ClerkProvider} from '@clerk/clerk-react'
const PUBLICKHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUBLICKHABLE_KEY){
   throw new Error("Missing publishable key")
}

createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <ClerkProvider publishableKey={PUBLICKHABLE_KEY} afterSignOutUrl='/'>
     <AppContextProvider>
        <App />
     </AppContextProvider>
     </ClerkProvider>
  </BrowserRouter>
 
)
