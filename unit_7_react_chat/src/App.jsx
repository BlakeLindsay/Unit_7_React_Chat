import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Auth from './components/auth/Auth';
import Signup from './components/auth/signup/Signup';
import Login from './components/auth/login/Login';
import Chat from './components/chat/Chat';

function App() {
	const [token, setToken] = useState('asdf');

	useEffect(() => {
		setToken(localStorage.token);
	},
	 []);

	 function updateToken(newToken) {
		setToken(newToken);
    localStorage.token = newToken;
	}

	function clearToken() {
		setToken('');
		localStorage.removeItem('token');
	}

	console.log(token)

  return (
    <div className="App">
			<BrowserRouter>
				<Navbar token={token} clearToken={clearToken}/>
					<Routes>
						<Route path='/' element={<Auth setToken={setToken} />} />
						<Route path='/signup' element={<Signup setToken={setToken} />} />
						<Route path='/login' element={<Login setToken={setToken} />} />
						<Route path='/chat' element={<Chat />}/>
					</Routes>
				<Footer />
			</BrowserRouter>
			{token}
    </div>
  );
}

export default App;