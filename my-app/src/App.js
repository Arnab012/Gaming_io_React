import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Videos from './components/Videos';
import Uplode from './components/Uplode';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {
  return (
    <>
      <Router>
        <Header/>
        <Routes>

          <Route path='/' element={<Home/>}/>
          <Route  path='/videos' element={<Videos/>}/>
          <Route  path='/uplode' element={<Uplode/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        

        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
