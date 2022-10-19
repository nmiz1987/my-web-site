import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import myPic from "../img/profile-pic.png";

const roles = [
	"I'm a Web Developer.",
	"I'm a FrontEnd Developer.",
	"I'm a FullStack Web Developer.",
	"I'm a Python Developer.",
];

const Title = () => {
	return (
		<div className="roles section">
			<img src={myPic} alt="Netanel Mizrahi"></img>
			<TypeAnimation
				sequence={[
					roles[0],
					2000,
					roles[1],
					2000,
					roles[2],
					2000,
					roles[3],
					2000,
				]}
				wrapper="div"
				cursor={true}
				repeat={Infinity}
			/>
		</div>
	);
};

export default Title;
