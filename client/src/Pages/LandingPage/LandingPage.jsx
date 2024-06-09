import React from "react";
import Footer from "../../component/Footer/Footer";
import backGroundPic from "./images/blackLogo.png";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
	const navigate = useNavigate();

	function ToLogIn() {
		navigate("./login");
	}
	return (
		<div>
			<div className="background">
				<ul>
					<li>
						<img src={backGroundPic} alt="" />
					</li>
					<li>Home</li>
					<li>Academy</li>
					<li>Scholarship</li>
					<li>Immersive</li>
					<li>Placement</li>
					<li>Contact</li>
					<li>
						<button onClick={ToLogIn} className="mybutton">
							Sign In
						</button>
					</li>
				</ul>
			</div>
			<div className="my-footer">
				<Footer />
			</div>
		</div>
	);
}

export default LandingPage;
