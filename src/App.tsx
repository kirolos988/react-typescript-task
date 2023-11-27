/* eslint-disable react/style-prop-object */
import React, { useState } from 'react';
import './App.css';
import NavBar from "./navBar/NavBar";
import Ticket from './ticket/Ticket'
import MidNavBar from './midNavBar/MidNavBar';
import Table from './Table/Table'
import Graph from './Graph/Graph';

function App() {


  return (
    <div className="App">
      <div><NavBar /></div>
    <div style={{display:'flex',justifyContent:'space-between'}}>
<div style={{width:'40%',}}>
<Ticket/>
</div>
<Graph/>
    </div>
      
      <div><MidNavBar /></div>
      <div><Table /></div>
    </div>
  );
}

export default App;
