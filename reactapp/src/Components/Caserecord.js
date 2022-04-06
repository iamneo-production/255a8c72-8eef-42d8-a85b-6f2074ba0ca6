import './App.css';
import React, { useState } from "react";
function Caserecord() {
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
    

<h1 align="center">Case Record</h1>
<div className="messages"
 
 >
   {errorMessage()}
   {successMessage()}
 </div>

<div class = "headings">
<h3 align="left">Mr.XYZ</h3>
<h3 align="right">10-02-2021</h3>
	</div>
 <div class="event"> 
  <label for="event">Event Detail:</label>
  <br />
<textarea name="event" onChange={handleEvent} className="input"
    value={event} id="event" rows="5" cols="50" required="true" minlength="5" maxlength="100"></textarea>
</div>
<div class="action"> 
  <label for="action">Action Taken:</label>
  <br />
<textarea name="action" onChange={handleAction} className="input"
    value={action} id="action" rows="3" cols="50" required="true" minlength="5" maxlength="100"></textarea>
</div>
<div  style={{
    display: "flex",
    justifyContent: "center",
  }}>
      
         <button onClick={handleSubmit} className="btn" type="submit" id="btn">
        Upload
    </button>
    </div>
  
  </div>
);
}

export default Caserecord;