import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

function Logout(props) {
	const navigate = useNavigate();

	function logout() {
		props.clearToken();
		navigate('/');
	};

	return (
		<Button color="danger" onClick={logout}>Logout</Button>
	);
};

export default Logout;