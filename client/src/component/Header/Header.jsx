import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import evangadi from "./images/blackLogo.png";
import "./Header.css";
import { AppState } from "../../App";


function Header() {
	const navigate = useNavigate();
	const {user, setUser, handleToggle} = useContext(AppState) 
// const 	[toggle, setToggle] = useState(true)
	function Logout () {
		localStorage.removeItem("token")
		setUser(null)
		// setToggle(!toggle)
			navigate("/");

		
	}
	function SignIn (e) {
		e.preventDefault();
		// setToggle(!toggle)
		navigate("/login");
		
	}
	return (
		<>
			<div className="outer-container">
				<div className="header">
					<div>
						<Link to={"/home"}>
							<img src={evangadi} alt="" />
						</Link>
					</div>
					<div className="inside-container">
						<div>Home</div>
						<div>How it works</div>
						{!user ? (
							<button
								onClick={Logout}
								// style={{ display: toggle ? "none" : "block" }}
							>
								SIGN IN
							</button>
						) : (
							<button
								onClick={Logout}
								// style={{ display: toggle ? "block" : "none" }}
							>
								LogOut
							</button>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
