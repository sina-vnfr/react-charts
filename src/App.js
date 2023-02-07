import ResponsiveAppBar from "./ORGANISME/Appbar";
import Chartpage from "./PAGES/Chartpage";
import {Route, Routes} from 'react-router-dom'
import Circlechart from './ATOMS/Circlechart'
import Linechart from './ATOMS/Linechart'
import Radialchart from './ATOMS/Radialchart'
import Stakedchart from './ATOMS/Stakedchart'
import { Snakechart } from "./ATOMS/Snakechart";
import Radarchart from './ATOMS/Radarchart'
import Verticalchart from "./ATOMS/Verticalchart";
import Numofinput from "./ATOMS/Numofinput";
import React , {useEffect, useState}from 'react'



function App() {

  
 return (
   





    <div className="App">

      <ResponsiveAppBar/>
      {/* <Numofinput/> */}
      
    <Routes>
      <Route path="/Circle/" element={<Circlechart/>}/>
      <Route path="/Linechart/" element={<Linechart/>}/>
      <Route path="/Radialchart/" element={<Radialchart/>}/>
      <Route path="/Stakedchart/" element={<Stakedchart/>}/>
      <Route path="/Snakechart/" element={<Snakechart/>}/>
      <Route path="/Radarchart/" element={<Radarchart/>}/>
      <Route path="/Verticalchart/" element={<Verticalchart/>}/>
    </Routes>
    <Chartpage/> 
    </div>
 );
}

export default App;
