import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

function Signup(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [verifyPassword, setVerifyPassword] = useState("");

    const [username, setUsername]= useState("");

    const signupRoute = 'http://localhost:4000/user/signup';


  return (
	<div>
		<Form>
			{/* <input type="text " placeholder='first' onChange={(e) => setFirst(e.target.value)}/>
			<input type="text" placeholder='last' onChange={(e) => setLast(e.target.value)}/>
             */}
            <FormGroup>
                <Label for="email">Email</Label>
            <Input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            </FormGroup>
             <FormGroup>
			<Input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />

             </FormGroup>
            <FormGroup>
			<Input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            </FormGroup>
            <FormGroup>
			<Input type="password" placeholder='verify password' onChange={(e) => setVerifyPassword(e.target.value)} />
            </FormGroup>
			<Button color="primary"type='submit' onClick={displayInputFields}>Submit</Button>
            {/* <button onClick={() => navigate('/login')}>Back to Login</button> */}

            <Link to="/login">
                <Button color="secondary">Back to Login</Button>
            </Link>

		</Form>
	</div>
  )
  async function displayInputFields(e) {
     e.preventDefault();
    //  console.log(email, password, verifyPassword);

    if (password !== verifyPassword) {
			alert('Your verify password does not match.');
			return;
		}

     try {
        let response = await fetch(signupRoute, {
            headers: new Headers({
                'content-type': 'application/json',
            }),
            method: 'POST',
            body:JSON.stringify ({
                username,
                email,
                password
             
            })
        })
            let results = await response.json();
            console.log(response.status)
            console.log(results);
            props.setToken(results.token, results.user._id);
            if (response.status === 200) {
                navigate('/chat');
                
            }
            
            } catch (error) {
                console.log('error',error)
            }
    }
}


export default Signup;