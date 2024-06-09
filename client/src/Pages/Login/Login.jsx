import { useRef, useState } from "react";
import axios from "../../axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import "./Login.css";
import Footer from "../../component/Footer/Footer";
import Register from "../Register/Register";
import handleToggle from "../../App";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded";

function Login() {
	const [loginError, setLoginError] = useState();
	const [passwordVisible, setPasswordVisible] = useState(false);
	const navigate = useNavigate();
	const emailDom = useRef();
	const passwordDom = useRef();
	const [toggle, setToggle] = useState(true);
	async function handleToggle(e) {
		e.preventDefault();
		setToggle(!toggle);
	}
	async function visibliity(e) {
		e.preventDefault();
		setPasswordVisible(!passwordVisible);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		const emailValue = emailDom.current.value;
		const passwordValue = passwordDom.current.value;
		if (!emailValue || !passwordValue) {
			alert("Please fill all the fields");
			return;
		}
		try {
			const { data } = await axios.post("/users/login", {
				email: emailValue,
				password: passwordValue,
			});
			// alert("User logged in successfully");
			localStorage.setItem("token", data.token);
			navigate("/home");
			//   console.log(data)
		} catch (error) {
			// alert(error?.response?.data?.msg);
			console.log(error.response.data);
			setLoginError(error?.response?.data?.msg);
		}
	}

	return (
		<div className="full-page">
			<Header />
			<div className="big-box">
				<section className="two-boxes">
					<div
						className="first-box"
						style={{ display: !toggle ? "none" : "block" }}
					>
						{/* {toggle ? ( */}
						<form onSubmit={handleSubmit}>
							<div style={{ fontWeight: "bold" }}>Login to your account</div>
							<div>
								<span>Don't have an account? </span>
								<span className="register-link">
									<Link onClick={handleToggle}>Create a new account</Link>
								</span>
							</div>
							<div>
								<p style={{ color: "red" }}>{loginError}</p>
							</div>
							<div>
								<input ref={emailDom} type="text" placeholder="email" />
							</div>
							<div className="eyeInpt-container">
								<input
									ref={passwordDom}
									className="eyeInput"
									type={passwordVisible ? "text" : "password"}

									// type="password"
									placeholder="password"
								/>
								{passwordVisible ? (
									<VisibilityRoundedIcon
										className="togglePassword"
										onClick={visibliity}
									/>
								) : (
									<VisibilityOffRoundedIcon
										className="togglePassword"
										onClick={visibliity}
									/>
								)}
							</div>
							<div className="register-link left">
								<Link to="#">Forgot Password?</Link>
							</div>
							<div>
								<button type="submit">Log in</button>
							</div>
						</form>
						{/* ) : ( */}

						<br />
						{/* <Link to={"/register"}>register</Link> */}
					</div>
					<div
						style={{ display: toggle ? "none" : "block" }}
						className="first-box"
					>
						<Register handleToggle={handleToggle} />
					</div>
					{/* )} */}
					<div className="second-box">
						<small>About</small>
						<h1>Evangadi Networks Q&A</h1>
						<div>
							<div>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Dolores, perspiciatis dolorem temporibus fugit odit quia
								incidunt, maxime!
							</div>
							<div>
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
								culpa vero voluptate animi quasi nulla harum consequatur ea
								accusamus tempora, ipsum inventore itaque iure ducimus
								aspernatur laboriosam sit excepturi pariatur!
							</div>
							<div>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam
								cum fuga a dolores libero quo possimus voluptas architecto
								incidunt minus consectetur, aperiam porro quod officia tempore!
								Dolorum iusto architecto quod!
							</div>
						</div>
						<div>
							<button>HOW IT WORKS</button>
						</div>
					</div>
				</section>
			</div>

			<Footer />
		</div>
	);
}

export default Login;
