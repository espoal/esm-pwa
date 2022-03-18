import { React, createRoot } from '@espoal/vendors'
import { Login } from '@pages/login/Login.mjs'
import { Dash } from '@pages/dash/Dash.mjs'


const rootElement = document.getElementById("react-app")
createRoot(rootElement).render(<Login />);
