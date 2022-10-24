import svgGit from "../assets/github-svgrepo-com.svg";

const Project = ({ title, desc, pic, linkWebSite, linkGitHub }) => {
	return (
		<div className="project section">
			<h1 className="project-title">{title}</h1>
			<img src={pic} alt={title} width="700"></img>

			<p className="desc" dangerouslySetInnerHTML={{ __html: desc }}></p>

			<div className="links">
				{linkWebSite && (
					<a
						className="Link2Site"
						href={linkWebSite}
						target="_blank"
						rel="noreferrer"
					>
						Open Website
					</a>
				)}

				{linkGitHub && (
					<a href={linkGitHub} target="_blank" rel="noreferrer">
						<img src={svgGit} alt="Click to open GitHub repo." />
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
