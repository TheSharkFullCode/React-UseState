import { useState } from 'react'

import './App.css'
import CajasInputs from './components/CajasInputs';
import English1 from './components/English1';

function App() {

  const [count, setCount] = useState(0);

  // const Aumentar=()=>{
  //   setCount(count+1);
  // }


  return (
    <>
    <div className='container'>

    <button onClick={()=>setCount(count+1)}>Aumentar </button>
    <button onClick={()=> setCount(count-1)}>Disminuir</button>
    <button onClick={()=> setCount(0)}>Restablecer</button>

    <h1> {count} </h1>

    
    </div>
     
    <div>

      <CajasInputs/>
      <English1/>
    

    </div>
     
    </>
  )
}

export default App
