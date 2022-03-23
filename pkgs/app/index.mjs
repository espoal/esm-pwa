import {
  React, createRoot, useEffect, useLocation,
  BrowserRouter as Router, Route, Routes
} from '@vendors/react'

import { Dashboard } from '@pages/dash/Dash.mjs'

import './index.scss'
import home from './index.html' assert { type: 'html'}
console.assert(home)

const rootElement = document.getElementById('react-root')

const App = () => {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
    </Routes>
  )
}

createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)

