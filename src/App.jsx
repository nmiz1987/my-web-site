import { useState } from "react";
import reactLogo from "./assets/code-solid.svg";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Projects from "./components/Projects";

function App() {
	return (
		<div className="content section">
			<div className="page-background"></div>
			<Nav />
			<div className="wrapper">
				<Title />
				<Projects />
			</div>
		</div>
	);
}

export default App;
