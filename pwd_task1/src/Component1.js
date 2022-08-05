import React from 'react'

const Component1 = () => {
  return (
    <div className="App">
    <div  className="header">
        <p style={{marginLeft:'35vw' , marginBottom:'10vh'}}>
          <span>Sign Up</span> <span style={{color: '#86C3F4' , marginLeft:'2vw'}}>Sign In</span>
        </p>
        <p>
          <input type="text" placeholder='Username'></input>
        </p>
        <p>
          <input type="text" placeholder='Full Name'></input>
        </p>
        <p>
          <input type="text" placeholder='E-mail'></input>
        </p>
        <p>
          <input type="Password" placeholder='Password'></input>
        </p>
        <p>
          <input type="checkbox"></input><span>Agree with <a style={{color: '#86C3F4'}} href="#">Terms & Condition</a></span>
        </p>
        <button>Sign Up</button>
        <p><a href='#'>I'm already a member </a></p>
    </div>
    </div>
  )
}

export default Component1