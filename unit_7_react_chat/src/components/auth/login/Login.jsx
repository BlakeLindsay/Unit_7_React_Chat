import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    // console.log(username, password);
    const response = await fetch("http://localhost:4000/login", {
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        method: 'POST',
        body: JSON.stringify({
            email,
            password
        })
        
    });

    const result = await response.json();
    // setToken(result.token);
    console.log(result);


  return (
    <div>
        <form onSubmit={loginUser}>
        <input 
          placeholder="email" 
          onChange={e => setEmail(e.target.value)} 
        />
        <br />
        <input 
          placeholder="password" 
          type="password" 
          onChange={e => setPassword(e.target.value)} 
        />
        <br />
        {/* button:s */}
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}}

export default Login;   