import { useState } from "react";
import reactLogo from "./assets/code-solid.svg";
import Nav from "./components/Nav";
import Go2Top from "./components/Go2Top";
import MainPage from "./Pages/MainPage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<div className="content section">
				<div className="page-background"></div>
				<Nav />
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/" element={<MainPage />} />
				</Routes>
				<Go2Top />
			</div>
		</BrowserRouter>
	);
}

export default App;
