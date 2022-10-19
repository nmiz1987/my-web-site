import React from "react";
import myPic from "../img/profile-pic.png";

const About = () => {
	return (
		<section id="about">
			<img src={myPic} alt="Netanel Mizrahi"></img>
			<div className="about-me">
				<p>
					Hi 👋,
					<br /> my name is <span className="highlight1">Netanel Mizrahi.</span>
				</p>
				<p>I have BSc. in Software engineering and I ❤️ the Web!.</p>
				<p>
					<span id="self-learner">
						I am a passionate and{" "}
						<span className="highlight2">self-learner</span>.{" "}
					</span>
				</p>
				<p>
					I learned myself everything thanks to the{" "}
					<a href="https://frontendmasters.com/" target="”_blank”">
						frontendmasters
					</a>
					.
				</p>
				<p>
					I know the following languages/technologies:
					<ul>
						<li>HTML5</li>
						<li>CSS3, Bootstrap, modern responsive techniques</li>
						<li className="highlight2">JavaScrip</li>
						<li className="highlight2">React.js</li>
						<li>Redux</li>
						<li className="highlight2">Node.js</li>
						<li>RESTful API</li>
						<li>SQL, NO-SQL, MongoDB</li>
						<li>jQuery</li>
						<li className="highlight2">Python</li>
						<li>Java</li>
						<li>Linux</li>
						<li>Git, GitHub</li>
						<li>And keeps learning every day...</li>
					</ul>
				</p>
				<p>I like learning programming languages 😊</p>
			</div>
		</section>
	);
};

export default About;
