import picArrowUp from "../img/arrowUp.png";
import { useRef } from "react";

const Go2Top = () => {
	const buttonRef = useRef();

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {
		scrollFunction();
	};
	window.onload = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (
			document.body.scrollTop > 20 ||
			document.documentElement.scrollTop > 20
		) {
			buttonRef.current.style.display = "block";
		} else {
			buttonRef.current.style.display = "none";
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}

	return (
		<button ref={buttonRef} onClick={topFunction} title="Go to top" id="go2top">
			<img src={picArrowUp} />
		</button>
	);
};

export default Go2Top;
