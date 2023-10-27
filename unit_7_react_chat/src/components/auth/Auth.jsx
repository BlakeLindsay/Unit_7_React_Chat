

function Auth(props) {
	return (
		<>
			<div>
				<h1>Login</h1>
				<Login setToken={props.setToken} />
			</div>
			<div>
				<h1>Signup Component</h1>
				<Signup setToken={props.setToken} />
			</div>
		</>
	)
}

export default Auth;