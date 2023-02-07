import { Button } from '@mui/material'
import { Box } from '@mui/system';
import React, { createContext,useState,useEffect} from 'react'
import Circlechart from './Circlechart';

var showComponent
const sms = createContext();
var numberofinput=[1,2,3];

function useForceUpdate(){
  let [value, setState] = useState(true);
  return () => setState(!value);
 
}

function Numofinput() {

  const forceUpdate = useForceUpdate();
  
 
  const numb = (event) => {
   numberofinput.push(parseInt(event.target.value))

  
  }

  useEffect(() => {
     showComponent=false;
     console.log("2222")
    },[]);
  


  const showComponentfunc = () => {
    showComponent = true;
    console.log("11111")
    forceUpdate()
    console.log(numberofinput)
 }


  return (
   <>
    
    <Box sx={{ width:'50px' ,gap:{lg:'20px' , xs:'0px'}}}
    mt='20px'
    ml='20px'>        
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
      <input type="number" onChange={numb}/>
    
    </Box>


    <Button onClick={showComponentfunc}>Button</Button>
        {showComponent ?
        <sms.Provider value={numberofinput} >
          <Circlechart/>
        </sms.Provider>
           :
         null
        }
    
      
    

   </>
  )
}

export default Numofinput