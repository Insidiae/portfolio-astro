import type { Project } from "../components/ProjectCard.astro";

const wdbcProjects: Project[] = [
	{
		title: "Course Exercises",
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
		thumbnailSrc: "portfolio-assets/img/wdbc-old.jpg",
		thumbnailAlt:
			"(Old) Thumbnail image from The Web Developer Bootcamp's Udemy page",
		content:
			'Course exercises from the old version of <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" rel="noopener noreferrer">The Web Developer Bootcamp</a> Udemy course. Also features exercises from <a href="https://www.udemy.com/course/the-advanced-web-developer-bootcamp/" target="_blank" rel="noopener noreferrer">The Advanced Web Developer Bootcamp</a> course.',
		cta: "View Exercises",
		href: "https://insidiae.github.io/wdbc/index.html",
	},
	{
		title: "Course Projects",
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
				type: "javascript",
				name: "JS",
			},
			{
				type: "d3",
				name: "D3",
			},
		],
		thumbnailSrc: "portfolio-assets/img/advanced-wdbc.jpg",
		thumbnailAlt:
			"Thumbnail image from The Advanced Web Developer Bootcamp's Udemy page",
		content:
			'Course projects from <a href="https://www.udemy.com/course/the-web-developer-bootcamp/" target="_blank" rel="noopener noreferrer">The Web Developer Bootcamp</a> and <a href="https://www.udemy.com/course/the-advanced-web-developer-bootcamp/" target="_blank" rel="noopener noreferrer">The Advanced Web Developer Bootcamp</a>.',
		cta: "View Projects",
		href: "https://insidiae.github.io/wdbc-proj/index.html",
	},
	{
		title: "Final Project: YelpCamp (MERN Remake)",
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

export default wdbcProjects;
