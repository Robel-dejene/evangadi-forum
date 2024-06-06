import { useRef, useState } from "react";
import axios from "../../axiosConfig";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import "./Login.css";
import Footer from "../../component/Footer/Footer";
import Register from "../Register/Register";
import handleToggle from "../../App";

function Login() {
	const navigate = useNavigate();
	const emailDom = useRef();
	const passwordDom = useRef();
	const [toggle, setToggle] = useState(true);
	async function handleToggle(e) {
		e.preventDefault();
		setToggle(!toggle);
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
			alert("User logged in successfully");
			localStorage.setItem("token", data.token);
			navigate("/");
			//   console.log(data)
		} catch (error) {
			alert(error?.response?.data?.msg);
			console.log(error.response.data);
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
									<div onClick={handleToggle}>Create a new account</div>
								</span>
							</div>
							<div>
								<input ref={emailDom} type="text" placeholder="email" />
							</div>
							<div>
								<input
									ref={passwordDom}
									type="password"
									placeholder="password"
								/>
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
