import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Home from './pages/home';
import About from './pages/about';
import Customers from './pages/customers';
import Login from './authentication/login';
import { useState } from 'react';
import Breadcrumb from './components/breadcrumb';

function App() {

  const [isAuth, setIsAuth] = useState(true);

  function MyApp() {
    return (

      <div className='app'>
        <div className='app-left-content'>
          <Sidebar />
        </div>
        <div className='app-right-content'>
          <Navbar />
          <Breadcrumb />
          <div className='app-container'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/customers' element={<Customers />} />
            </Routes>
          </div>
        </div>
      </div>
    );
  }

  return (isAuth) ? <MyApp /> : <Login />
}

export default App;
