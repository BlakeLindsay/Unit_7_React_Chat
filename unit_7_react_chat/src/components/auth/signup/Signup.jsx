import React, { useState } from 'react'

function Signup(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [first, setFirst] = useState("");
    const [last, setLast] = useState("");

    const signupRoute = 'http://localhost:4000/user/signup';


  return (
	<div>
		<form>
			<input type="text " placeholder='first' onChange={(e) => setFirst(e.target.value)}/>
			<input type="text" placeholder='last' onChange={(e) => setLast(e.target.value)}/>
			<input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
			<input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)}  />
			<button type='submit' onClick={displayInputFields}>Submit</button>
		</form>
	</div>
  )
  async function displayInputFields(e) {
     e.preventDefault();

     console.log('testing this function')
     console.log(email)

     try {
        let response = await fetch(signupRoute,{
            headers: new Headers({
                'content-type': 'application/json',
            }),
            method: 'POST',
            body:JSON.stringify ({
                first: first,
                last: last,
                mail: email,
                pass: password,
                
            })
        })
            let results = await response.json();
            console.log(results)
            // props.setToken(results.token)
            // if (response.status === 200) {
            //     navigate('/about');
            
            } catch (error) {
                
            }
    }
}


export default Signup;