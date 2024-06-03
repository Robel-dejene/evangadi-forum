import React from "react";
import { Link } from "react-router-dom";
import evangadi from "./images/blackLogo.png";
import "./Header.css";

function Header() {
	return (
		<>
			<div className="outer-container">
				<div className="header">
					<div>
						<Link to={"/"}>
							<img src={evangadi} alt="" />
						</Link>
					</div>
					<div className="inside-container">
						<div>Home</div>
						<div>How it works</div>
						<button>LogOut</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
