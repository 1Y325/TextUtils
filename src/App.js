

import './App.css';
import React from 'react'

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
function App() {
  return (
    <>
     <Navbar title = "Textutils" aboutText = "About us" />
     <div className="container my-3">
        <TextForm heading ="Enter the Text to Analyze Below"/>
        <About/>
     </div>
     
    </>
  );
}

export default App;
