import { useRef } from "react";
import axios from "../axiosConfig";
import { Link, useNavigate } from "react-router-dom";

function Login() {
	const navigate = useNavigate();
	const emailDom = useRef();
	const passwordDom = useRef();

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
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<span>email :---</span>
					<input ref={emailDom} type="text" placeholder="email" />
				</div>
				<br />
				<div>
					<span>password :---</span>
					<input ref={passwordDom} type="password" placeholder="password" />
				</div>
				<br />
				<button type="submit">Log in</button>
			</form>
			<br />
			<Link to={'/register'}>register</Link>
		</section>
	);
}

export default Login;
