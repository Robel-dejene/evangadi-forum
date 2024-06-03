import React from "react";
import "./css/AskQuestion.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
function AskQuestion() {
	const navigate = useNavigate();
	async function handleQuestion(e) {
        e.preventDefault();
		console.log("lol");
		navigate('/')
	}
	return (
		<>
		<Header />
			<div className="container">
				<div className="instructions">
					<h2>Steps to write a good question</h2>
					<ul>
						<li>Summerize your problem in a one-line title.</li>
						<li>Describe your problem in more detail.</li>
						<li>Describe what you tried and what you expected to happen.</li>
						<li>Review your question and post it to the site.</li>
					</ul>
				</div>
			</div>
            <section>

			<div className="q-area">
				<div className="inside-q-area">
					<h2>Ask a public question</h2>
				</div>
				<div>
					<small>Go to question page</small>
				</div>
				<div>
					<form action="" onSubmit={handleQuestion}>
						<div>
							{/* <textarea name="" id="" placeholder="Title" rows="3" cols="125"></textarea> */}
                            <input type="text" placeholder="Title" />
						</div>
						<div>
							<textarea rows="10" cols="125" placeholder="Question Description..." ></textarea>
						</div>
						<div>
							<button type="submit">Post Your Question</button>
						</div>
					</form>
				</div>
			</div>
            </section>
			<Footer />
		</>
	);
}

export default AskQuestion;
