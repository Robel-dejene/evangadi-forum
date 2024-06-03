import React, { useState } from "react";
import { useRef } from "react";
import axios from "../axiosConfig";
import { Link, useNavigate } from "react-router-dom";

function Register() {
	const [error1, serError1] = useState("")
	const navigate = useNavigate();
	const userNameDom = useRef();
	const firstNameDom = useRef();
	const lastNameDom = useRef();
	const emailDom = useRef();
	const passwordDom = useRef();
	async function handleSubmit(e) {
		e.preventDefault();
		const userNameValue = userNameDom.current.value;
		const firstNameValue = firstNameDom.current.value;
		const lastNameValue = lastNameDom.current.value;
		const emailValue = emailDom.current.value;
		const passwordValue = passwordDom.current.value;
		if (
			!userNameValue ||
			!firstNameValue ||
			!lastNameValue ||
			!emailValue ||
			!passwordValue
		) {
			alert("Please fill all the fields");
			return;
		}
		try {
			await axios.post("/users/register", {
				username: userNameValue,
				firstname: firstNameValue,
				lastname: lastNameValue,
				email: emailValue,
				password: passwordValue,
			});
			alert("User registered successfully");
			navigate("/login");
		} catch (error) {
			// alert("Error registering user");
			// alert(error?.response?.data?.msg);
			serError1(error?.response?.data?.msg);
			console.log(error.response);
		}
		// console.log(userNameDom.current.value)
		// console.log(firstNameDom.current.value)
		// console.log(lastNameDom.current.value)
		// console.log(emailNameDom.current.value)
		// console.log(passwordNameDom.current.value)
	}
	return (
		<section>
			<form onSubmit={handleSubmit}>
				<div>
					<span>username:---</span>
					<input ref={userNameDom} type="text" placeholder="username" />
				</div>
				<br />
				<div>
					<span>First name :---</span>
					<input ref={firstNameDom} type="text" placeholder="first name" />
				</div>
				<br />
				<div>
					<span>last name :---</span>
					<input ref={lastNameDom} type="text" placeholder="last name" />
				</div>
				<br />
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
				<button type="submit">Register</button>
			</form>
			<br />
			<Link to={"/login"}>Login</Link>
			<h2>{error1}</h2>
		</section>
	);
}

export default Register;
