import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import App from './App.tsx'
import store, { persistor } from './features/store.ts';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
     <NextUIProvider>
      <App />
    </NextUIProvider>
    </PersistGate>
    </Provider>
  // </StrictMode>,
)
