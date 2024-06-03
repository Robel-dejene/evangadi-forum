import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Register from "./Pages/Register";
import { useEffect, useState, createContext } from "react";
import axios from "./axiosConfig.js";
import AskQuestion from "./Pages/Question/AskQuestion.jsx";

export const AppState = createContext();

function App() {
	const [user, setUser] = useState({});

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
		} catch (error) {
			console.log(error.response);
			navigate("/login");
		}
	}

	useEffect(() => {
		checkUser();
	}, []);
	return (
		<AppState.Provider value={{ user, setUser }}>
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
