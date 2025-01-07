import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import App from './App.tsx'
import store from './api/store';
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <Provider store={store}>
     <NextUIProvider>
      <App />
    </NextUIProvider>
    </Provider>
  // </StrictMode>,
)
