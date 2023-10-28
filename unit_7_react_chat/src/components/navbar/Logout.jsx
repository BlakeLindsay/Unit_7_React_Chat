import { useNavigate } from "react-router-dom";

function Logout(props) {
	const navigate = useNavigate();

	function logout() {
		props.clearToken();
		navigate('/');
	};

	return (
		<button onClick={logout}>Logout</button>
	);
};

export default Logout;