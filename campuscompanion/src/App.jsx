import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/dashboard/Dashboard'
import Admin from './pages/admin/Admin'
import Page404 from './pages/404/Page404'
import Chat from './pages/chat/Chat'
import Login from './pages/login/Login'

function App() {

  return (
    <>
     
          <Router>
            <Routes>
              <Route path='/' element={<Login />} />

              <Route path='/chat' element={<Chat />} />
              <Route path='/admin' element={<Admin />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='*' element={<Page404 />} />


            </Routes>
          </Router>

        </>
        )
}

        export default App
