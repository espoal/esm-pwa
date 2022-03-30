import { React, createRoot, useEffect } from '@libs/vendors'
import { BrowserRouter as Router, Route, Routes, useLocation } from '@libs/vendors'

import { SignIn } from '@pkgs/auth/SignIn'
import { RequireAuth, AuthProvider } from '@pkgs/auth/AuthProvider'

import { Dashboard } from '@pkgs/dash/Dashboard'
import { DashboardPage } from '@pkgs/3stats/Dashboard'

import './index.scss'
// import home from './index.html' assert { type: 'html'}
// console.assert(home)

const App = () => {

  /* const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change */

  return (
    <React.StrictMode>
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              exact path="/"
              element={<SignIn />}
            />
            <Route
              path="/3stats"
              element={
                <RequireAuth>
                  <DashboardPage />
                </RequireAuth>
              }
            />
            <Route
              path="/dash"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="*"
              element={<h1>Not Found</h1>}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </React.StrictMode>
  )
}


const rootElement = document.getElementById('root')
createRoot(rootElement).render(<App />)

// const sideBarElement = document.getElementById("sidebar")
// createRoot(sideBarElement).render(<Sidebar />)
