import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register/Register.jsx";
import { useEffect, useState, createContext } from "react";
import axios from "./axiosConfig.js";
import AskQuestion from "./Pages/Question/AskQuestion.jsx";

export const AppState = createContext();

function App() {
	const [user, setUser] = useState({});
	const [toggle, setToggle] = useState(true);
	async function handleToggle(e) {
		e.preventDefault();
		setToggle(!toggle);
	}

	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	async function checkUser() {
		try {
			const { data } = await axios.get("/users/check", {
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			setUser(data);
			console.log(data);
		} catch (error) {
			console.log(error.response);
			navigate("/login");
		}
	}

	useEffect(() => {
		checkUser();
	}, []);
	return (
		<AppState.Provider value={{ user, setUser, handleToggle, toggle }}>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="/askquestion" element={<AskQuestion />} />
			</Routes>
		</AppState.Provider>
	);
}

export default App;
