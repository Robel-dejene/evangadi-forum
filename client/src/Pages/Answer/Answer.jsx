import React, { useEffect, useState } from "react";
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import "./Answer.css";
import { useNavigate } from "react-router-dom";
import axios from "../../axiosConfig";
import { useParams } from "react-router-dom";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { fontGrid } from "@mui/material/styles/cssUtils";
import ScrollableComponent from "../../component/ScrollableComponent/scrollableComponent";

function Answer() {
	const [answer, setAnswer] = useState("");
	const [questionidForAsking, setQuestionIdForAsking] = useState("");
	const [bringAnswer, setBringAnswer] = useState([]);
	const [bringQuestion, setBringQuestion] = useState([]);
	const token = localStorage.getItem("token");
	const { questionid } = useParams();
	const [answerGiven, setAnswerGiven] = useState(false);
	async function postedAnswer() {
		try {
			const { data } = await axios.get(`/answers/${questionid}`, {
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			setBringAnswer(data.answers);
			console.log(data);
		} catch (error) {
			console.log(error.response);
		}
	}
	async function postedQuestion() {
		try {
			const { data } = await axios.get(`/questions/${questionid}`, {
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			setBringQuestion(data.question);
			console.log(data);
		} catch (error) {}
	}
	useEffect(() => {
		if (questionid) {
			postedAnswer();
			postedQuestion();
		}
	}, [questionid]);
	const navigate = useNavigate();
	async function postAnswer(e) {
		setAnswerGiven(!answerGiven);
		e.preventDefault();
		try {
			if (answer.length === 0) {
				alert("Please enter your answer");
			}
			const { data } = await axios.post(
				`/answers/${questionid}`,
				{ answer },
				{
					headers: {
						Authorization: "Bearer " + token,
					},
				}
			);
			console.log(data);
			setTimeout(() => {
				window.location.reload();
				// navigate("/home");
			}, 2000);
		} catch (error) {
			console.log(error.response);
		}
	}
	return (
		<>
			<Header />
			<section className="answerPage">
				<div className="border-bottom">
					<h1>Question</h1>
					<div className="the-question">
						{bringQuestion.map((question, index) => (
							<div key={index} className="one-question">
								<p
									style={{
										fontWeight: "bold",
										fontSize: "30px",
										borderBottom: "3px solid #fe8303",
										marginBottom: "2vh",
									}}
								>
									{question.title}
								</p>
								<p
									style={{
										color: "rgb(95, 92, 92);",
										fontSize: "20px",
									}}
								>
									{question.description}
								</p>
							</div>
						))}
					</div>

					<h1 className="top-bottom">Answers From The Community</h1>
					<div className="answers-list">
						<ScrollableComponent
							style={{ height: "350px", backgroundcolor: "red" }}
						>
							{bringAnswer.map((answer, index) => (
								<div key={index} className="answer">
									<div>
										<AccountCircleOutlinedIcon style={{ fontSize: "100" }} />
										<p style={{ fontWeight: "bold", textAlign: "center" }}>
											{answer.username}
										</p>
									</div>
									<div>
										<p>{answer.answer}</p>
									</div>
								</div>
							))}
						</ScrollableComponent>
					</div>
				</div>
				<div className="middle">
					<h1>Answer The Top Question</h1>
					<small
						style={{
							display: answerGiven ? "block" : "none",
							color: "green",
						}}
					>
						Answer posted successfully
					</small>
					<small>Go to Question page</small>
					<form action="" onSubmit={postAnswer}>
						<textarea
							value={answer}
							onChange={(e) => setAnswer(e.target.value)} // Updating the state
							rows="10"
							cols="125"
							placeholder="Your Answer..."
						></textarea>
						<button type="submit">Post Your Answer</button>
					</form>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default Answer;
