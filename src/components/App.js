import React from 'react';
import './App.css'
import Footer from './Footer';
import Header from './Header';
import Home from './Home';

const App = () => {
   return (
      <div className='app'>
         <Header />
         <Home />
         <Footer />
      </div>
   )
}

export default App
