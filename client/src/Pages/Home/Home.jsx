import { useContext } from "react";
import { AppState } from "../../App";
import Header from "../../component/Header/Header";
import AskQuestion from "../Question/AskQuestion";
import Footer from "../../component/Footer/Footer";
import { useNavigate } from "react-router-dom";
import './Home.css'
function Home() {
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
				<div>
					<button onClick={toQuestions}>Ask Question</button>
					<h2>Wellcome : {user.username}</h2>
				</div>
				<div>
					<h1>Questions</h1>
					{/* <AskQuestion /> */}
				</div>
					<Footer />
			</section>
		</>
	);
}

export default Home;
