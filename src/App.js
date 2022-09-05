
import React, { useState } from 'react'
import './App.css';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './component/Navbar';
import TextBox from './component/TextBox';
// import About from './component/About';
// import Alert from "./component/Alert";


function App() {
 
  const [mode,setMode]=useState('light');

  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#2d2b2b';

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

    }
  }



  


  return (
    <>
    
        <Navbar mode={mode} togglemode={togglemode}/>
      
      <TextBox  mode={mode}/> 
      
          {/* <About  mode={mode}/> */}
          </>
          
  );
}
export default App;
