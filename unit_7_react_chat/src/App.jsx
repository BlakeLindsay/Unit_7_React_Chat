import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
	const [token, setToken] = useState('');

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

  return (
    <div className="App">
			<BrowserRouter>
				<Navbar token={token} clearToken={clearToken}/>
					<Routes>

					</Routes>
				<Footer />
			</BrowserRouter>
    </div>
  );
}

export default App;