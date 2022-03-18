import { React, createRoot } from '@espoal/vendors'
import { Login } from '@pages/login/Login.mjs'
import { Dash } from '@pages/dash/Dash.mjs'
import { Sidebar } from '@components/sidebar/Sidebar.mjs'


const rootElement = document.getElementById("react-app")
createRoot(rootElement).render(<Login />)

const sideBarElement = document.getElementById("sidebar")
createRoot(sideBarElement).render(<Sidebar />)
