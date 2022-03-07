import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import AuthContextProvider, { useAuth } from './context/authContext';

export default function App() {
  const { currentUser } = useAuth();
  console.log(currentUser?.displayName);
  return (
    <AuthContextProvider>
      <Router>
        <div className="app" >
          <Routes>
          <Route path='/' element={<Login />} />
           <Route path='/home' element={<Home />} />
           

          </Routes>
        </div>
      </Router>
    </AuthContextProvider>


  );
}