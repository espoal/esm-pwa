import { React, createRoot, useEffect } from '@vendors/react'
import { BrowserRouter as Router, Route, Routes, useLocation } from '@vendors/react'

import { SignIn } from '@pkgs/users/SignIn'

import './index.scss'
// import home from './index.html' assert { type: 'html'}
// console.assert(home)

const App = () => {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </>
  )
}


const rootElement = document.getElementById('root')
createRoot(rootElement).render(<React.StrictMode>
  <Router>
    <App />
  </Router>
</React.StrictMode>)

// const sideBarElement = document.getElementById("sidebar")
// createRoot(sideBarElement).render(<Sidebar />)
