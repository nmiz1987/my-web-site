import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav>
			<h2>Netanel Mizrahi ©️</h2>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<a href="#projects">Portfolio</a>
				</li>

				<li>
					<Link to="/About">About</Link>
				</li>
				<li>
					<Link to="/Contact">Contact</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
