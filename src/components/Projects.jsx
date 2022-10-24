import Project from "./Project.jsx";
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
				desc="<p>I have always liked to put in one place all the links I use on a daily basis, so that everything is accessible in one place.<br>For those who know, Google has something similar when opening a new tab, a sort of default tab when there is no link in the path.</p>
				<p> I created the same page and added two external APIs: the first loads a new image at the top of the page, and the second imports a famous quote from the software world, both of which load something new with each refresh.</p>
				<p>I planted an Easter egg on the page, see if you can find it... 😉</P"
				pic={picZone}
				linkWebSite="https://the-zone-six.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/The-Zone"
			/>

			<Project
				title="My link pool"
				desc="<p>Did I mention that I like to have all the links in one place?</p>
				<p>
				I built this site because I wanted to build a repository where I can gather the links I like in one place.<br>To post new links, get existing links, update what is already there now, in short, a server that will manage the Backend and a Frontend site that will pull all the sites through an API and display everything to the screen.
				</p>
				<p>
				I set up an express mini-server written in node.js (because I removed all the options except GET), uploaded it to the railway website.</p>
				<p>
				For database I use Mongo atlas.
				</p>
				<p>
				This site loads all the data into one place, arranges everything by categories and displays everything.</p>
				<p>It's a content site that simply displays all the links in one place, every time the site is loaded it pulls all the links using the same API.</p>"
				pic={picLinkPool}
				linkWebSite="https://my-link-site.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/my-link-site"
			/>

			<Project
				title="The new 100fm digital"
				desc="<p>I really like the digital channels of 100fm - <a href='https://digital.100fm.co.il/'>https://digital.100fm.co.il/</a>. As part of self-learning of frontend I decided to build a 'clone' of the site on my additional features.</p>
				<p> The database connects to the 100fm API from the link <a href='https://d203uamca1bsc4.cloudfront.net/app/'>https://d203uamca1bsc4.cloudfront.net/app/</a>.</p>
				<p>Many thanks to 100fm for the inspiration for my project. 🎧</p>"
				pic={pic100fm}
				linkWebSite="https://the-new-100fm-digital.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/The-new-100fm-digital"
			/>

			<Project
				title="Meta CentraLand"
				desc="<p>This project was built as part of an Internet technologies course, the project simulates a Meta Centra-Land environment where users can purchase, play and manage virtual spaces.</p>
				<p>All Deployment instructions are in the git repository.</p>"
				pic={picMetaCentraLand}
				linkGitHub="https://github.com/nmiz1987/Meta_CentraLand"
			/>

			<Project
				title="Digital clock with notes"
				desc="<p>There is nothing like a new watch to feel better, so why not build a new one...? </p>
				<p>I wanted to build an elegant and simple watch that I could turn on for my smartphone and iPad while I was using the computer.</p>
				<p>I've added a field of notes so I can see the important things at a glance, the notes will be saved locally. ⌚</p>"
				pic={picClock}
				linkWebSite="https://digital-clock-with-notes.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/Digital-clock-with-notes"
			/>

			<Project
				title="Random Radio Station"
				desc="<p>Feeling lucky? 😉</p>
				<p>I invite you to listen to a random radio station from abroad.</p>
				<p>Do not like what you are listening to? Just get another random station.</p>"
				pic={picRandomRadio}
				linkWebSite="https://random-radio-station.vercel.app/"
				linkGitHub="https://github.com/nmiz1987/Random-Radio-Station"
			/>
		</div>
	);
};

export default Projects;
