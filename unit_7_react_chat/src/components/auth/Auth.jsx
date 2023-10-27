import Login from "../../../../../../../LectureNotes/Unit_7/03_pizza_client/src/components/auth/login/Login";


function Auth(props) {
    return (
        <>
        <div>
            <h1>Login</h1>
            <Login setToken={props.setToken} />
        </div>
        <div>
            <h1>Signup Component</h1>
            <Login setToken={props.setToken} />
        
        </div>
        
        </>
    )
	
}

export default Auth;