import { React, useState, Navigate, useLocation, createContext, useContext } from '@libs/vendors'

export const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {

  const storeCred = true
  const defaultState = storeCred ? {
    authId: localStorage.getItem('authId'),
    authToken: localStorage.getItem('authToken')
  } : {}

  const [authState, setAuthState] = useState(defaultState)

  const signIn = (authToken) => {
    setAuthState(authToken)
  }

  const signOut = () => {
    setAuthState(null)
  }

  return <AuthContext.Provider value={{ authState, signIn, signOut }}>{children}</AuthContext.Provider>
}

export const RequireAuth = ({ children }) => {
  const { authState } = useContext(AuthContext)
  const location = useLocation()
  console.log({authState})

  // if (!auth.user) {
  if (!authState?.authToken) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children
}
