import React, { useState } from 'react'

function CajasInputs() {
    const [num1,setNum1]= useState();
    const [num2,setNum2]= useState();
    const [result,setResult]= useState(0);

    const Sumar=()=>{

        setResult(Number(num1) + Number(num2));
    }
    const Modificar=(e)=>{
        setNum1(e.target.value)

    }
    const Modificar2=(e)=>{
        setNum2(e.target.value)

    }

  return (

    <div className='container2'>

        <input type="number" className='myinput'  value={num1} onChange={Modificar}/>+
        <input type="number" className='myinput'  value={num2} onChange={Modificar2}/> =
        <input type=""  value={result} readOnly  className='myinput'/> 
      
        <button className='mybutton' onClick={Sumar}>Sumar</button>
    </div>
  )
}

export default CajasInputs
