import React from 'react';
import "./SignUp.css";

function SignUp() {
  return (
    <div>
      <header class="App-header1">
        <h4 style={{ textAlign: 'left' }}>LawHarbor</h4>
      </header>
      <form class='App-form1'>
        <h1 class="App-bcolor1"> Sign Up</h1>
        <input type="text" name="email" placeholder="Enter Email" />
        <br></br>
        <br></br>
        <input type="text" name="user name" placeholder="Enter Username" />
        <br></br>
        <br></br>
        <input type="text" name="MobileNumber" placeholder="Enter Mobile Number" />
        <br></br>
        <br></br>
        <input type="text" name="Password" placeholder="Enter Password" />
        <br></br>
        <br></br>
        <a href="dashboard">Dashboard</a>


        <button>Sign Up</button>
      </form>
    </div>

  );
}
export default SignUp;