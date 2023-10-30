// import { Link } from "react-router-dom";
import Logout from "./Logout";

const Navbar = ({ token, clearToken}) => {
	return (
		<nav>
			<span>Bränd</span>
			{
				token
				?
				<Logout clearToken={clearToken}/>
				:
				null
			}
		</nav>
	)
};

export default Navbar;