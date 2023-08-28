import React from 'react';
import Birds from '../Pages/Birds/Birds';
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home';

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
        </Routes>
      </main>
    </>
  );
}

export default App;
