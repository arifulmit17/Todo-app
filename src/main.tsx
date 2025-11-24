import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';

import { Provider } from 'react-redux'
import { store, persistor } from './app/store'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'

import { RouterProvider } from "react-router/dom";
import { router } from './router/router';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      
        <StrictMode>
       <RouterProvider router={router}/>
      </StrictMode>
        
        
      
    </PersistGate>
  </Provider>
)
