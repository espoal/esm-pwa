export * as React from 'react'
export { createRoot } from 'react-dom/client'

export {
  useEffect,
  useState,
  useRef,
  useContext
} from 'react'

export {
  Routes,
  Route,
  useLocation,
  BrowserRouter,
  NavLink,
  Link
} from 'react-router-dom'

export { CSSTransition } from 'react-transition-group'

export * as Flatpickr from 'react-flatpickr'

export {
  Chart, BarController, BarElement,
  LinearScale, LineController, LineElement, PointElement,
  TimeScale, CategoryScale,
  Tooltip, Legend, Filler,
  DoughnutController, ArcElement
} from 'chart.js'
import 'chartjs-adapter-moment'
