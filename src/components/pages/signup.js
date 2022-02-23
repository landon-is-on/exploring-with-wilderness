import React from 'react';
import './pages-css/signUp.css';
const SignUp = () => {
  return (
    <div className="body-background">                                                                                
   
<form className="box" action="/sign-up" method="post">
  <h1>Sign up</h1>
  <p style={{ paddingBottom: 20 }}>Sign up today and get 15% off of the next booking.</p>
  <input type="text" name="" placeholder="Username"/>
  <input type="password" name="" placeholder="Password"/>
  <input type="submit" name="" value="Login"/>
</form>
</div>
  
  );
};

export default SignUp;