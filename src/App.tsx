import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import Signup from './features/auth/Signup'
import Signin from './features/auth/Signin'
import Dashboard from './features/dashboard/Dashboard'
import { ProtectedLayout } from './Layout/ProtectedLayout'
import "react-toastify/dist/ReactToastify.css";



function App() {
  return (
    <Router>
      <Routes>
        <Route element={<ProtectedLayout />} >
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        

      </Routes>

      </Router>
  )
}

export default App
