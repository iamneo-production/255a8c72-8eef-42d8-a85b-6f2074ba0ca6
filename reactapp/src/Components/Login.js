import React from 'react';


function Login() {
    return (
        
        <div>
            <header class="App-header">
                <h4 style={{ textAlign: 'left' }}>LawHarbor</h4>
            </header>
            <form class='App-form'>
                <h1 class="App-bcolor"> Log in </h1>
                <input type="text" name="user name" placeholder="Enter Email" />
                <br></br>
                <br></br>
                <input type="text" name="password" placeholder="Enter Password" />
                <br></br>
                <p>New User? <a href="SignUp">Sign Up</a></p>
                <button>Log in</button>
            </form>
        </div>

    );

}

export default Login;