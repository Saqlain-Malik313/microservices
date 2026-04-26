import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'   // ✅ add this
import store from './redux/store'        // ✅ add this
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>   {/* ✅ wrap app */}
      <App />
    </Provider>
  </StrictMode>,
)