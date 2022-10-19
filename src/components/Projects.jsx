import Project from "./Project";
import picZone from "../img/zone.jpg";
import pic100fm from "../img/100fm.jpg";
import picClock from "../img/clock.jpg";
import picRandomRadio from "../img/randomRadio.jpg";
import picLinkPool from "../img/link-pool.jpg";
import picMetaCentraLand from "../img/MetaCentraLand.jpg";

const Projects = () => {
	return (
		<div className="items" id="projects">
			<h2 id="projects-title">You can look at my projects 🚀</h2>

			<Project
				title="The zone"
				desc="I have always liked to put in one place all the links I use on a daily basis, so that everything is accessible in one place.<br>For those who know, Google has something similar when opening a new tab, a sort of default tab when there is no link in the path.
				<br> I created the same page and added two external APIs: the first loads a new image at the top of the page, and the second imports a famous quote from the software world, both of which load something new with each refresh.<br>
				I planted an Easter egg on the page, see if you can find it... 😉"
				pic={picZone}
				linkWebSite="https://the-zone-six.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/The-Zone"
			/>

			<Project
				title="My link pool"
				desc="Did I mention that I like to have all the links in one place?<br>I built this site because I wanted to build a repository where I can gather the links I like in one place.<br>To post new links, get existing links, update what is already there now, in short, a server that will manage the Backend and a Frontend site that will pull all the sites through an API and display everything to the screen.<br>
				I set up an express mini-server written in node.js (because I removed all the options except GET), uploaded it to the railway website.<br>
				
				For database I use Mongo atlas.<br>
				
				This site loads all the data into one place, arranges everything by categories and displays everything.
				<br>It's a content site that simply displays all the links in one place, every time the site is loaded it pulls all the links using the same API."
				pic={picLinkPool}
				linkWebSite="https://my-link-site.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/my-link-site"
			/>

			<Project
				title="The new 100fm digital"
				desc="I really like the digital channels of 100fm - https://digital.100fm.co.il/. As part of self-learning of frontend I decided to build a 'clone' of the site on my additional features.<br> The database connects to the 100fm API from the link https://d203uamca1bsc4.cloudfront.net/app/.<br>Many thanks to 100fm for the inspiration for my project. 🎧"
				pic={pic100fm}
				linkWebSite="https://the-new-100fm-digital.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/The-new-100fm-digital"
			/>

			<Project
				title="Meta CentraLand"
				desc="This project was built as part of an Internet technologies course, the project simulates a Meta Centra-Land environment where users can purchase, play and manage virtual spaces.<br>
				All Deployment instructions are in the git repository."
				pic={picMetaCentraLand}
				linkGitHub="https://github.com/nmiz1987/Meta_CentraLand"
			/>

			<Project
				title="Digital clock with notes"
				desc="There is nothing like a new watch to feel better, so why not build a new one...? <br>I wanted to build an elegant and simple watch that I could turn on for my smartphone and iPad while I was using the computer.<br>I've added a field of notes so I can see the important things at a glance, the notes will be saved locally. ⌚"
				pic={picClock}
				linkWebSite="https://digital-clock-with-notes.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/Digital-clock-with-notes"
			/>

			<Project
				title="Random Radio Station"
				desc="Feeling lucky? 😉<br>I invite you to listen to a random radio station from abroad.<br>Do not like what you are listening to? Just get another random station."
				pic={picRandomRadio}
				linkWebSite="https://random-radio-station.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/Random-Radio-Station"
			/>
		</div>
	);
};

export default Projects;
