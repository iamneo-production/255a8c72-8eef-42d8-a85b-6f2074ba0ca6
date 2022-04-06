import './Report.css';
import React, { useState } from "react";
function Casereport() {
  const [event, setEvent] = useState('');
const [action, setAction] = useState('');
const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);


  const handleEvent = (e) => {
    setEvent(e.target.value);
    setSubmitted(false);
  };
  
  // Handling the email change
  const handleAction = (e) => {
    setAction(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (event === '' || action === '' ) {
    setError(true);
    } else {
    setSubmitted(true);
    setError(false);
    }
  };
  const successMessage = () => {
    return (
    <div
      className="success"
      style={{
      display: submitted ? '' : 'none',
      }}>
      <h1>Successfully uploaded!!</h1>
    </div>
    );
  };
  
  // Showing error message if error is true
  const errorMessage = () => {
    return (
    <div
      className="error"
      style={{
      display: error ? '' : 'none',
      }}>
      <h1>Please enter all the fields</h1>
    </div>
    );
  };
  
return (
  <div className="App">
    

<h1 align="center">Case Report</h1>
<div className="messages"
 
 >
   {errorMessage()}
   {successMessage()}
 </div>


<div class = "headings">


<h3 align="left">User1</h3>
<h3 align="right">18-03-2021</h3>

  </div>
 
 <div class="event" style={{
   display:"flex",
   justifyContent:"center",
    borderRadius: "20%",
    
 }}> 
 
<textarea name="event" onChange={handleEvent} className="input"
    value={event} id="event" rows="12" cols="50" required="true" minlength="5" maxlength="100" placeholder={"Enter the case details here..."}> </textarea>
  </div>
  <div>
    <h1 align="right" >Signature</h1>
    <h3 align="right">Digitally Verified</h3>
    </div>
 
    
  
  </div>
);
}

export default Casereport;





