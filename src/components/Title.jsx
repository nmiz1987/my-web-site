import { TypeAnimation } from "react-type-animation";
import myPic from "../img/profile-pic.png";

const roles = [
	"I'm a Web Developer.",
	"I'm a React Developer.",
	"I'm a React Native Developer.",
	"I'm a Husband and a father of 2.",
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
