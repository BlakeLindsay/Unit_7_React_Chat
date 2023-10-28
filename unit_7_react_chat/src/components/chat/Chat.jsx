import Display from "./Display";
import { useNavigate } from "react-router-dom";

function Chat(props) {
	const navigate = useNavigate('/');

	if(!props.token) {
		navigate();
	}

	return (
		<div>
			<Display token={props.token}/>
		</div>
	)
};

export default Chat;