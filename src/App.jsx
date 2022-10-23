import Nav from "./components/Nav.jsx";
import Go2Top from "./components/Go2Top.jsx";
import MainPage from "./Pages/MainPage.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
