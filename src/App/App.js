import React from 'react';
import Birds from '../Pages/Birds/Birds';
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home';
import BirdDetails from '../Pages/BirdDetails/BirdDetails';

function App() {
  return (
    <>
      <header>
        <h1>
          <a href="/">Audubon Society</a>
        </h1>
      </header>
      <main>
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Birds' element={<Birds/>} />
        <Route path='/details/:id' element={<BirdDetails />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
