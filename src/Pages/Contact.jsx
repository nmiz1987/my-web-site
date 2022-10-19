import { useState } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	async function sendMessage() {
		// const res = await fetch(null);
		// const json = await res.json();
		setName("");
		setEmail("");
		setMessage("");
	}

	return (
		<div className="form-container">
			<h1>
				Speak up!
				<br />
				Let's collaborate.
			</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					sendMessage();
				}}
			>
				<label htmlFor="name">Name</label>
				<input
					className="focus"
					id="name"
					value={name}
					placeholder="Enter your name"
					onChange={(e) => setName(e.target.value)}
				/>

				<label htmlFor="email">Email</label>
				<input
					className="focus"
					id="email"
					value={email}
					placeholder="Enter your email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<label htmlFor="message">Message</label>
				<textarea
					className="focus"
					id="message"
					maxLength={1000}
					rows={5}
					value={message}
					placeholder="Enter your message..."
					onChange={(e) => setMessage(e.target.value)}
				/>
				<button onClick={sendMessage}>Send your message</button>
			</form>
		</div>
	);
};

export default Contact;
