import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import CustomNavbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Auth from './components/auth/Auth';
import Signup from './components/auth/signup/Signup';
import Login from './components/auth/login/Login';
import Chat from './components/chat/Chat';

function App() {
	const [token, setToken] = useState('asdf');
	const [userID, setUserID] = useState('');

	useEffect(() => {
		setToken(localStorage.token);
		setUserID(localStorage.userID);
	},
	 []);

	 function updateToken(newToken, newUserID) {
		setToken(newToken);
    localStorage.token = newToken;
		setUserID(newUserID);
		localStorage.userID = newUserID;
	}

	function clearToken() {
		setToken('');
		localStorage.removeItem('token');
	}

	console.log(token)

  return (
    <div className="App">
			<BrowserRouter>
				<CustomNavbar token={token} clearToken={clearToken}/>
					<Routes>
						<Route path='/' element={<Auth setToken={updateToken} />} />
						<Route path='/signup' element={<Signup setToken={updateToken} />} />
						<Route path='/login' element={<Login setToken={updateToken} />} />
						<Route path='/chat' element={<Chat token={token} userID={userID}/>}/>
					</Routes>
				<Footer />
			</BrowserRouter>
			{/* {token} */}
    </div>
  );
}

export default App;