import React from "react";
import myPic from "../img/profile-pic.png";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<section id="about">
			<img src={myPic} alt="Netanel Mizrahi"></img>
			<div className="about-me">
				<p>
					Hi 👋,
					<br /> my name is <span className="highlight1">Netanel Mizrahi.</span>
				</p>
				<p>I have BSc. in Software engineering and I love the Web!</p>
				<p>
					<span id="self-learner">
						I am passionate and a{" "}
						<span className="highlight2">self-learner</span>.{" "}
					</span>
				</p>
				<p>
					I learned myself everything thanks to the{" "}
					<a href="https://frontendmasters.com/" target="”_blank”">
						frontendMasters
					</a>
					.
				</p>
				<p>
					I know the following languages/technologies:
					<ul>
						<li className="highlight2">React.js</li>
						<li className="highlight2">React Native</li>
						<li>HTML5</li>
						<li>CSS3, Bootstrap, modern responsive techniques</li>
						<li className="highlight2">JavaScript</li>
						<li>Redux</li>
						<li className="highlight2">Node.js</li>
						<li>RESTful API</li>
						<li>SQL, NO-SQL, MongoDB</li>
						<li className="highlight2">Python</li>
						<li>Java</li>
						<li>Linux</li>
						<li>Git, GitHub</li>
						<li>And keeps learning every day...</li>
					</ul>
				</p>
				<br />
				<p className="last-section">
					I&apos;m always looking for new frontend challenges because I love
					design and want to learn and develop.
					<br />I enjoy working with others and am a good team player.
					<br />
					If you believe I&apos;d be a good fit for your team, feel free to go
					over my resume and get in touch with me.
					<br />
					Please don&apos;t hesitate to get in touch with me through email at{" "}
					<a href="mailto:nmiz1987@gmail.com">nmiz1987@gmail.com</a> or by
					filling out this{" "}
					<Link className="highlight2" to="/Contact">
						form
					</Link>{" "}
					if you have any more questions or simply want to ask me anything.
				</p>
			</div>
		</section>
	);
};

export default About;
