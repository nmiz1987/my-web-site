import Title from "../components/Title";
import Lottie from "lottie-react";
import arrowDown from "../assets/arrow-down.json";
import Projects from "../components/Projects";

const MainPage = () => {
	return (
		<div className="wrapper">
			<Title />
			<Lottie id="arrow-down" animationData={arrowDown} />
			<Projects />
		</div>
	);
};

export default MainPage;
