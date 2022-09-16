import type { ProjectItem } from "../components/Project.astro";

const featuredProjects: ProjectItem[] = [
	{
		title: "Epic React Checkpoints",
		tags: [
			{
				type: "react",
				name: "React",
			},
			{
				type: "javascript",
				name: "JS",
			},
			{
				type: "typescript",
				name: "TS",
			},
		],
		thumbnailSrc: "https://kentcdodds.com/images/epicreact-promo/er-1.gif",
		thumbnailAlt: "Promo image from the Epic React course",
		content:
			'Notes and Code as I go along with Kent C. Dodds\' <a href="https://epicreact.dev/" target="_blank" rel="noopener noreferrer">Epic React</a> course.',
		cta: "View Exercises",
		href: "https://github.com/Insidiae/epic-react-checkpoints",
	},
	{
		title: "Fullstack D3: React Edition",
		tags: [
			{
				type: "d3",
				name: "D3",
			},
			{
				type: "react",
				name: "React",
			},
			{
				type: "typescript",
				name: "TS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/fullstack-d3-cover.png",
		thumbnailAlt: "Cover image of the Fullstack D3 book",
		thumbnailAnchor: "top",
		content:
			'Course exercises and projects from the <a href="https://www.newline.co/fullstack-d3" target="_blank" rel="noopener noreferrer">Fullstack D3 and Data Visualization book</a>, remade using React + D3 + TypeScript.',
		cta: "View Exercises",
		href: "https://github.com/Insidiae/fullstack-d3-react",
	},
	{
		title: "YelpCamp (MERN Remake)",
		tags: [
			{
				type: "mongodb",
				name: "MongoDB",
			},
			{
				type: "express",
				name: "Express",
			},
			{
				type: "react",
				name: "React",
			},
			{
				type: "node",
				name: "Node",
			},
		],
		thumbnailSrc: "portfolio-assets/img/wdbc.jpg",
		thumbnailAlt:
			"(New) Thumbnail image from The Advanced Web Developer Bootcamp's Udemy page",
		content:
			'With the re-release of <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" rel="noopener noreferrer">The Web Developer Bootcamp</a>, I decided to remake the final course project using React (and Tailwind) instead of EJS to display the frontend.',
		href: "https://github.com/Insidiae/yelpcamp-mern",
	},
	{
		title: "JavaScript Algorithms and Data Structures",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/js-algos-and-data-structs.jpg",
		thumbnailAlt:
			"Thumbnail image from the JavaScript Algorithms and Data Structures Masterclass Udemy page",
		content:
			'Course exercises and notes from Colt Steele\'s <a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/" target="_blank" rel="noopener noreferrer">JavaScript Algorithms and Data Structures Masterclass</a> course. Also features course exercises from the <a href="https://zerotomastery.io/courses/faang-interview-prep/" target="_blank" rel="noopener noreferrer">ZTM Big Tech (FAANG) Interviews</a> course.',
		cta: "View Exercises",
		href: "https://github.com/Insidiae/js-algos-and-data-structs",
	},
	{
		title: "Warbler: 2022 Edition",
		tags: [
			{
				type: "typescript",
				name: "TS",
			},
			{
				type: "nestjs",
				name: "NestJS",
			},
			{
				type: "react",
				name: "React",
			},
			{
				type: "redux",
				name: "RTK Query",
			},
		],
		thumbnailSrc: "portfolio-assets/img/wdbc-alt.jpg",
		thumbnailAlt:
			"Alternate Thumbnail image from The Advanced Web Developer Bootcamp's Udemy page",
		content:
			'I completely rewrote <a href="https://www.udemy.com/course/the-advanced-web-developer-bootcamp/" target="_blank" rel="noopener noreferrer">The Advanced Web Developer Bootcamp</a>&apos;s final project, updating the project&apos;s tech stack to use modern tools and technologies in 2022.',
		href: "https://github.com/Insidiae/warbler-2022",
	},
];

export default featuredProjects;
