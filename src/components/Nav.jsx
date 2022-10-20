import { Link } from "react-router-dom";
import { useRef } from "react";

const Nav = () => {
	const toggleButtonRef = useRef();
	const navBarLinksRef = useRef();

	function toggleMenu() {
		navBarLinksRef.current.classList.toggle("active");
	}

	return (
		<nav className="navbar">
			<button
				onClick={toggleMenu}
				ref={toggleButtonRef}
				href="#"
				className="toggle-button"
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</button>
			<h2>
				<Link to="/" id="brand-name">
					<strong>Netanel</strong> Mizrahi
				</Link>
			</h2>
			<ul ref={navBarLinksRef}>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<a href="/#projects">Portfolio</a>
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
