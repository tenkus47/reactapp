import React from 'react';
import './App.css';
import Formdata from './Component/BgChangeInput'
import Bikelist from './Component/credit'
import Corousal from './Component/Corousal'
import Menu from './Component/Menu'
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Menu/>
    <Formdata/>
    
    <Bikelist/>
    <Corousal/>
    <Footer/>
    </div>
  );
}

export default App;
