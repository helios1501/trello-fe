import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './common.css'
import './style.scss'
import store from './app/store.tsx'
import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
