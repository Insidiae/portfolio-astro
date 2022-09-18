import type { ProjectItem } from "../components/Project.astro";

const freeCodeCampProjects: ProjectItem[] = [
	{
		title: "SiIvaGunner Tribute Page",
		tags: [
			{
				type: "legacy",
				name: "Legacy",
			},
			{
				type: "html",
				name: "HTML",
			},
			{
				type: "bootstrap",
				name: "Bootstrap",
			},
		],
		thumbnailSrc: "portfolio-assets/img/tribute.jpg",
		thumbnailAlt: "SiIvaGunner Christmas Comeback Crisis Logo",
		content:
			'My first ever freeCodeCamp project! I turned <a href="https://www.youtube.com/watch?v=RPXZq_jc4xY" target="_blank" rel="noopener noreferrer">the SiIvaGunner Timeline</a> into an HTML page using some Bootstrap classes.',
		href: "https://insidiae.github.io/tribute/siivagunner.html",
	},
	{
		title: "Jojo's Bizzare Random Quote Generator",
		tags: [
			{
				type: "legacy",
				name: "Legacy",
			},
			{
				type: "html",
				name: "HTML",
			},
			{
				type: "css",
				name: "CSS",
			},
			{
				type: "javascript",
				name: "JS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/quotegen.png",
		thumbnailAlt: "Screenshot of the Random Quote Generator project",
		content:
			"One of my first JS projects, I made a random quote generator that displays a random background matching the currently displayed quote.",
		href: "https://insidiae.github.io/quotegen/quotegen.html",
	},
	{
		title: "Weather App",
		tags: [
			{
				type: "legacy",
				name: "Legacy",
			},
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "jquery",
				name: "jQuery",
			},
			{
				type: "ajax",
				name: "APIs/AJAX",
			},
		],
		thumbnailSrc: "portfolio-assets/img/weatherapp.png",
		thumbnailAlt: "Screenshot of the Weather App project",
		content:
			"This proect uses a legacy OpenWeatherMap API to display the current weather as well as a 5-day weather forecast on the user's current location (or any other city they search for).",
		href: "https://insidiae.github.io/weatherapp/weatherapp.html",
	},
	{
		title: "Wikipedia Viewer",
		tags: [
			{
				type: "legacy",
				name: "Legacy",
			},
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "jquery",
				name: "jQuery",
			},
			{
				type: "ajax",
				name: "APIs/AJAX",
			},
		],
		thumbnailSrc: "portfolio-assets/img/wikiviewer.png",
		thumbnailAlt: "Screenshot of the Wikipedia Viewer project",
		content:
			"This project uses the Wikipedia search API to display search results based on user input.",
		href: "https://insidiae.github.io/wikiviewer/wikiviewer.html",
	},
	{
		title: "Twitch Viewer",
		tags: [
			{
				type: "legacy",
				name: "Legacy",
			},
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "jquery",
				name: "jQuery",
			},
			{
				type: "ajax",
				name: "APIs/AJAX",
			},
		],
		thumbnailSrc: "portfolio-assets/img/twitchviewer.png",
		thumbnailAlt: "Screenshot of the Twitch Viewer project",
		content:
			"This project uses a legacy Twitch API to display some information on some pre-selected Twitch channels.",
		href: "https://insidiae.github.io/twitchviewer/twitchviewer.html",
	},
	{
		title: "Survey Form",
		tags: [
			{
				type: "html",
				name: "HTML",
			},
			{
				type: "css",
				name: "CSS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/survey.png",
		thumbnailAlt: "Screenshot of the freeCodeCamp Survey Form project",
		content:
			"One of the newer Responsive Web Design projects from freeCodeCamp, a simple survey form demonstrating different types of form input fields.",
		href: "https://insidiae.github.io/survey/survey.html",
	},
	{
		title: "Product Landing Page",
		tags: [
			{
				type: "html",
				name: "HTML",
			},
			{
				type: "css",
				name: "CSS",
			},
			{
				type: "sass",
				name: "Sass",
			},
		],
		thumbnailSrc:
			"https://insidiae.github.io/landing/assets/img/turret-colors.jpg",
		thumbnailAlt: "A selection of Aperture Science Turrets",
		content:
			"This project uses intermediate CSS + Sass workflows to create a responsive Product Landing Page for the Aperture Science Turret from the Portal video game series.",
		href: "https://insidiae.github.io/landing/landing.html",
	},
	{
		title: "JavaScript Calculator",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "jquery",
				name: "jQuery",
			},
		],
		thumbnailSrc: "portfolio-assets/img/jscalc.png",
		thumbnailAlt: "Screenshot of the JavaScript Calculator project",
		content: "A simple calculator made with JavaScript.",
		href: "https://insidiae.github.io/jscalc/jscalc.html",
	},
	{
		title: "Pomodoro Clock",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/pomodoro.png",
		thumbnailAlt: "Screenshot of the Pomodoro Clock project",
		content:
			"A simple Pomodoro Clock made with JavaScript, using the JavaScript Date API to keep track of the time.",
		href: "https://insidiae.github.io/pomodoro/pomodoro.html",
	},
	{
		title: "Tic Tac Toe",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/tictactoe.png",
		thumbnailAlt: "Screenshot of the Tic Tac Toe project",
		content:
			"A Tic-Tac-Toe game made with pure JavaScript, featuring an unwinnable AI opponent using the Minimax algorithm.",
		href: "https://insidiae.github.io/tictactoe/tictactoe.html",
	},
	{
		title: "Simon® Game",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/simon.png",
		thumbnailAlt: "Screenshot of the Simon Game project",
		content: "A Simon&reg; Game made with pure JavaScript.",
		href: "https://insidiae.github.io/simon/simon.html",
	},
	{
		title: "Markdown Previewer",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "react",
				name: "React",
			},
		],
		thumbnailSrc: "portfolio-assets/img/markdown.png",
		thumbnailAlt: "Screenshot of the Markdown Previewer project",
		content: "A simple Markdown proviewer using React and Marked.",
		href: "https://insidiae.github.io/markdown/markdown.html",
	},
	{
		title: "Drum Machine",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "react",
				name: "React",
			},
		],
		thumbnailSrc: "portfolio-assets/img/drum.png",
		thumbnailAlt: "Screenshot of the Drum Machine project",
		content:
			"A Drum Machine app built with React, with each drum pad playing a corresponding audio file when clicked or a corresponding keyboard key is pressed.",
		href: "https://insidiae.github.io/drum/drum.html",
	},
	{
		title: "Technical Documentation",
		tags: [
			{
				type: "html",
				name: "HTML",
			},
			{
				type: "bootstrap",
				name: "Bootstrap",
			},
			{
				type: "javascript",
				name: "JS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/docs.png",
		thumbnailAlt: "Screenshot of the Technical Documentation project",
		content:
			'A Technical Documentation page featuring my notes from Colt Steele\'s <a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/" target="_blank" rel="noopener noreferrer">JavaScript Algorithms and Data Structures Masterclass</a> course. Includes syntax highlighting with <a href="https://highlightjs.org/" target="_blank" rel="noopener noreferrer">Highlight.js</a> and custom diagrams from <a href="https://mermaid-js.github.io/" target="_blank" rel="noopener noreferrer">Mermaid.js</a>.',
		href: "https://insidiae.github.io/js-algos-and-data-structs/index.html",
	},
	{
		title: "Bar Chart",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "d3",
				name: "D3",
			},
		],
		thumbnailSrc: "portfolio-assets/img/bar-chart.png",
		thumbnailAlt: "Screenshot of the Bar Chart Visualization project",
		content:
			"A Bar Chart depicting the United States GDP from 1947 to 2015, built with D3.js.",
		href: "https://insidiae.github.io/bar-chart/index.html",
	},
	{
		title: "Scatterplot",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "d3",
				name: "D3",
			},
		],
		thumbnailSrc: "portfolio-assets/img/scatterplot.png",
		thumbnailAlt: "Screenshot of the Scatterplot Visualization project",
		content:
			"A Scatterplot depicting the Doping allegations for the 35 fastest times for Bicycle Racing up Alpe d'Huez, built with D3.js.",
		href: "https://insidiae.github.io/scatterplot/index.html",
	},
	{
		title: "Heat Map",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "d3",
				name: "D3",
			},
		],
		thumbnailSrc: "portfolio-assets/img/heatmap.png",
		thumbnailAlt: "Screenshot of the Heat Map Visualization project",
		content:
			"A Heat Map depicting the Monthly Global Land-Surface Temperature from 1753 to 2015, built with D3.js.",
		href: "https://insidiae.github.io/heatmap/index.html",
	},
	{
		title: "Choropleth Map",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "d3",
				name: "D3",
			},
		],
		thumbnailSrc: "portfolio-assets/img/choropleth.png",
		thumbnailAlt: "Screenshot of the Choropleth Map Visualization project",
		content:
			"A Choropleth Map depicting the percentage of adults age 25 and older with a bachelor's degree or higher for every US county from 2010 to 2014, built with D3.js.",
		href: "https://insidiae.github.io/choropleth/index.html",
	},
	{
		title: "Treemap",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "d3",
				name: "D3",
			},
		],
		thumbnailSrc: "portfolio-assets/img/treemap.png",
		thumbnailAlt: "Screenshot of the Treemap Visualization project",
		content:
			"A Treemap depicting the Top 100 Most Sold Video Games Grouped by Platform, built with D3.js.",
		href: "https://insidiae.github.io/treemap/index.html",
	},
];

export default freeCodeCampProjects;
