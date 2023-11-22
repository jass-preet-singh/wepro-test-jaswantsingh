import React from 'react';
import { Route, Routes } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantDetails from './components/RestaurantDetails';
import Navbar from './components/shared/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './components/shared/Banner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <div className='container mt-3'>
        <Routes>
          <Route path='/' element={<RestaurantList />} />
          <Route path='/restaurant-details' element={<RestaurantDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
