import { useState } from "react";
import reactLogo from "./assets/code-solid.svg";
import Nav from "./components/Nav";
import Title from "./components/Title";

function App() {
	return (
		<div className="content">
			<div className="page-background"></div>
			<Nav />
			<div className="wrapper">
				<Title />
			</div>
		</div>
	);
}

export default App;
