import { useContext, useEffect, useState } from "react";
import { AppState } from "../../App";
import Header from "../../component/Header/Header";
import AskQuestion from "../Question/AskQuestion";
import Footer from "../../component/Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import axios from "../../axiosConfig";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
function Home() {
	const [questions, setQuestions] = useState([]);
	const [username, setUsername] = useState();
	const token = localStorage.getItem("token");

	//  async function userx () {

	// 	 const { questions, username } = await axios.get("/questions/see-questions");
	// 	 setQuestions(questions)
	// 	 setUsername(username)
	//  }
	async function userx() {
		try {
			const { data } = await axios.get("/questions/see-questions", {
				headers: {
					Authorization: "Bearer " + token,
				},
			});
			setQuestions(data.questions);
			console.log(data);
			// setUsername(username);
		} catch (error) {
			console.log(error.response);
		}
	}

	useEffect(() => {
		userx();
	}, []);
	const navigate = useNavigate();
	async function toQuestions(e) {
		e.preventDefault();
		navigate("/askquestion");
	}
	const { user } = useContext(AppState);
	console.log(user);
	return (
		<>
			<section className="top-container">
				<Header />
				<div className="Question">
					<div>
						<button onClick={toQuestions}>Ask Question</button>
					</div>
					<div>
						<h2>Wellcome : {user?.username}</h2>
					</div>
				</div>
				<div>
					<div className="questionBox">
						<h1>Questions</h1>
						{questions?.map((question, i) => (
							<Link
								to={`/answers/${question.questionid}`}
								className="flexing"
								key={question.questionid}
							>
								<div className="questionList">
									<div>
										<AccountCircleOutlinedIcon style={{ fontSize: 100 }} />
										<p>{question.username}</p>
									</div>
									<div>
										<h3>{question.title}</h3>
									</div>
								</div>
								<div className="arrow">
									<ArrowForwardIosSharpIcon />
								</div>
							</Link>
						))}
					</div>

					{/* <div className="questionList">
						{questions?.map((question, i) => (
							<AccountCircleIcon fontSize="large" />
							
							{question[i].username}
							{question[i].title}
						))}
					</div> */}
					{/* <p>{user.username}</p>
					<p>{questions.title}</p>
					<div>
						<h1>Questions</h1>
						<ul>
							{questions.map((question) => (
								<li key={question.questionid}>{question.title}</li>
							))}
						</ul>
					</div> */}

					{/* <AskQuestion /> */}
				</div>
				<Footer />
			</section>
		</>
	);
}

export default Home;
