import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './components/Login';
import Home from './components/Home';

export default function App() {
    return (
      <Router>
      <div className="app" >
        <Routes>
          <Route path='/' element={ <Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
         
      </div>
      </Router>
    );
  }