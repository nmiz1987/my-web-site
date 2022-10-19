import { useState } from "react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	// const [isSend, setIsSend] = useState(false);

	async function sendMessage() {
		// if (isSend) {
		// 	return;
		// }
		const res = await fetch(
			"https://my-link-server-production.up.railway.app/messages/new",
			{
				method: "POST",
				headers: { "Content-type": "application/json" },
				body: JSON.stringify({
					name: name,
					email: email,
					message: message,
				}),
			}
		);
		const data = await res.json();
		console.log("New Message sent successfully: ", data);
		// setName("");
		// setEmail("");
		// setMessage("");
		// setIsSend(true);
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
					type="email"
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
				<button>Send your message</button>
			</form>
		</div>
	);
};

export default Contact;
