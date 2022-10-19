import svgLink from "../assets/link-svgrepo-com.svg";
import svgGit from "../assets/github-svgrepo-com.svg";

const Project = ({
	backgroundColor,
	title,
	desc,
	pic,
	linkWebSite,
	linkGitHub,
}) => {
	return (
		<div className="project section">
			<h1 className="project-title">{title}</h1>
			<img src={pic} alt={title} width="700"></img>

			{desc.split("<br>").map((i, key) => {
				return (
					<p className="desc" key={key}>
						{i}
					</p>
				);
			})}

			<div className="links">
				{linkWebSite && (
					<a className="Link2Site" href={linkWebSite} target="_blank">
						Open Website
					</a>
				)}

				{linkGitHub && (
					<a href={linkGitHub} target="_blank">
						<img src={svgGit} alt="Click to open GitHub repo." />
					</a>
				)}
			</div>
		</div>
	);
};

export default Project;
