// import { Link } from "react-router-dom";
import Logout from "./Logout";
import { Navbar } from "reactstrap";

const CustomNavbar = ({ token, clearToken}) => {
	return (
		// <nav>
		// 	<span>Bränd</span>
		// 	{
		// 		token
		// 		?
		// 		<Logout clearToken={clearToken}/>
		// 		:
		// 		null
		// 	}
		// </nav>
		<Navbar>
			Bränd
		</Navbar>
	)
};

export default CustomNavbar;