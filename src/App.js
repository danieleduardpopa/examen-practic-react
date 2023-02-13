import './utils/utility-classes.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import People from './pages/People/People';

function App() {
    return (
      <div>
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/people' element={ <People /> } />
        </Routes>
      </div>
    )
}

export default App
