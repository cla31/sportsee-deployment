import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'
import PageErreur from './Pages/PageErreur'
import Home from './Pages/Home'

/**
 * Creation of pages routes
 * @returns {JSX.Element} App component
 */
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<Dashboard />} />
        <Route path="*" element={<PageErreur />} />
      </Routes>
    </Router>
  )
}

export default App
