import './App.css';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Addition() {

  const [operand1, setOperand1] = useState();
  const [operand2, SetOperand2] = useState();
  const [output, setOutput]= useState();
  const link = "http://localhost:5000/add?a="+operand1+"&b="+operand2

    
  function HandleSubmit(e){
    if(e.target.id === "add"){
      
    const link = "http://localhost:5000/add?a="+operand1+"&b="+operand2
    axios.get(link,{method:"GET",mode:"no-cors",headers:{}})
            .then(res => {
            setOutput(res.data["sum"])
          })
     }

   }
  function handleChange(e) {
    if(e.target.id === "Input2"){
        SetOperand2(e.target.value)

    } else if (e.target.id === "Input1"){
      setOperand1(e.target.value)

    }
  }
  return (<div>
    <form >
        <br/>
        <br/>
        <label>Number 1  : </label>
      <input id='Input1' pattern= "[0-9]*" type = "text" value = {operand1} onChange = {handleChange}/>
      <br/>
      <label htmlFor='Second'> </label>
      <br/>
      <label>Number 2  : </label>
      <input id='Input2' pattern= "[0-9]*" type = "text" value = {operand2} onChange = {handleChange}/>
      <br/>
      <br/>
      <Button  id = "add" onClick = {HandleSubmit}>Add</Button>
      <div>
        <br/>
        <p>The sum of {operand1} and {operand2}  = {output}</p>
        </div>
    </form>
    </div>
  );
};

export default Addition;
