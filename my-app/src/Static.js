import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Logo from "./logo.svg";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Static() {

  const [name, setName] = useState();
  const [Bio, setBio] = useState();
  const [biodisp, setBioDisp]= useState();
  const [namedisp, setNameDisp]= useState();

  function handleSubmit(e){

    if(e.target.id === "update"){
        setBioDisp(Bio)
        setNameDisp(name)
    }
  }
  function handleChange(e) {
    if(e.target.id === "Name"){
        setName(e.target.value)

    } else if (e.target.id === "Bio"){
        setBio(e.target.value)

    }
  }
  return (
    <div >
        <br/>
        <div class=" mb-4 border border-secondary" width = "100px">
        <Container>
                <Row class="w-50 h-80 p-3">
                    <Col>
                <div class="col-sm-10 col-form-label">
                    <img src={Logo} alt="..." class="img-thumbnail"  width="500" height="500"/>
                </div>
                </Col>
                <Col>
                <div >
                    <br/>
                        <div class="col-sm-5">
                            <input  type="text" readOnly={true} class="form-control" id="usr" placeholder='Edit below to update Name' value = {namedisp}></input>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <div >
                            <textarea class="form-control z-depth-1" readOnly={true} id="exampleFormControlTextarea6" rows="8"  value = {biodisp} placeholder="Edit Below to update Biography"></textarea>
                        </div>
                    </div>
                    </Col>
                </Row>
    </Container>
    </div>

    <div class=" mb-4 border border-secondary" width = "100px">
    <label>Name:  </label>  

    <form >
      <input id='Name'  type = "text" value = {name} onChange = {handleChange}/>
      <br/>
      <br/>
      <label>Biography: </label>

      <div >
      <textarea id="Bio" onChange = {handleChange} rows="8"  ></textarea>
     </div><br/>
      <Button  id = "update" onClick = {handleSubmit}>Update</Button>
      <br/>
      <br/>
      <div>
     </div>
    </form>
    </div>
    </div>
  )
}
