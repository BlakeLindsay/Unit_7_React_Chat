import React, { useState } from "react";
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({setToken}) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    // console.log(username, password);
    const response = await fetch("http://localhost:4000/user/login", {
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			method: 'POST',
			body: JSON.stringify({
				email,
				password
			})
    });

    const results = await response.json();
    console.log(response.status);
		console.log(results);
    setToken(results.token, results.user._id);
    if (response.status === 200) {
      if (results.user && results.user._id){
        setToken(results.token, results.user._id);
        navigate('/chat');
      }

     else {
      console.error('User data is missing in the response')
    }
  } else {
    console.error('Login Failded')

  }
	}

  return (
    <div>
        <Form onSubmit={loginUser}>
          <FormGroup>
          <Label for="email">Email</Label>
        <Input 
          placeholder="email" 
          onChange={e => setEmail(e.target.value)} 
          />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
        <Input 
          placeholder="password" 
          type="password" 
          onChange={e => setPassword(e.target.value)} 
          />
          </FormGroup>
        {/* button:s */}
        <Button color="primary" type="submit">Submit</Button>
        <Link to="/signup">
          <Button color="secondary">create account</Button>"
          </Link> 
        {/* <button type="submit">Submit</button> 
        <button onClick={() => navigate('/signup')}>create account</button> */}
        {/* end button:s */}
        <br />
      </Form>

    </div>
  );
}

export default Login;   