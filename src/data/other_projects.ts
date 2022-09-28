import type { Project } from "../components/ProjectCard.astro";

const otherProjects: Project[] = [
	{
		title: "#JavaScript30 Challenge",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
		],
		thumbnailSrc: "https://javascript30.com/images/JS3-social-share.png",
		thumbnailAlt: "Thumbnail image from the #JavaScript30 course page",
		content:
			'Exercises from <a href="https://javascript30.com/" target="_blank" rel="noopener noreferrer">Wes Bos\' 30 Day Vanilla JS Coding Challenge</a>.',
		cta: "View Exercises",
		href: "https://insidiae.github.io/js30/index.html",
	},
	{
		title: "CSS Grid Exercises / Projects",
		tags: [
			{
				type: "css",
				name: "CSS",
			},
		],
		thumbnailSrc: "https://cssgrid.io/images/GRID-social-share.png",
		thumbnailAlt: "Thumbnail image from the cssgrid.io course page",
		content:
			'Course exercises from <a href="https://cssgrid.io/" target="_blank" rel="noopener noreferrer">Wes Bos\' CSS Grid course</a>.',
		cta: "View Exercises",
		href: "https://insidiae.github.io/griddyup/griddyup.html",
	},
	{
		title: "Beginner JavaScript Projects",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
		],
		thumbnailSrc:
			"https://beginnerjavascript.com/images/BJS/BJS-Social-Share.png",
		thumbnailAlt: "Thumbnail image from the Beginner Javascript course page",
		content:
			'Course exercises from <a href="https://beginnerjavascript.com/" target="_blank" rel="noopener noreferrer">Wes Bos\' Beginner JavaScript course</a>.',
		cta: "View Projects",
		href: "https://insidiae.github.io/beginner-javascript-projects/index.html",
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
		title: "Advanced CSS and Sass",
		tags: [
			{
				type: "css",
				name: "CSS",
			},
			{
				type: "sass",
				name: "Sass",
			},
		],
		thumbnailSrc: "portfolio-assets/img/advanced-css-and-sass.jpg",
		thumbnailAlt: "Thumbnail image from Advanced CSS and Sass' Udemy page",
		content:
			'Course projects from Jonas Schmedtmann\'s <a href="https://www.udemy.com/course/advanced-css-and-sass/" target="_blank" rel="noopener noreferrer">Advanced CSS and Sass course</a>. Also features the final project from his revamped <a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/" target="_blank" rel="noopener noreferrer">HTML and CSS course</a>, remade using Sass.',
		cta: "View Projects",
		href: "https://insidiae.github.io/advanced-css-and-sass/index.html",
	},
	{
		title: "React Native Zero To Mastery",
		tags: [
			{
				type: "react",
				name: "React",
			},
			{
				type: "react-native",
				name: "React Native",
			},
		],
		thumbnailSrc: "portfolio-assets/img/ztm-react-native.png",
		thumbnailAlt:
			"Thumbnail image from Zero To Mastery's React Native Course page",
		content:
			'Course projects from the <a href="https://zerotomastery.io/courses/learn-react-native/" target="_blank" rel="noopener noreferrer">Zero To Mastery React Native course</a>.',
		cta: "View Projects",
		href: "https://github.com/Insidiae/ztm-react-native",
	},
	{
		title: "Machine Learning Zero To Mastery",
		tags: [
			{
				type: "python",
				name: "Python",
			},
			{
				type: "ml",
				name: "AI/ML",
			},
			{
				type: "scikit-learn",
				name: "Scikit-Learn",
			},
			{
				type: "tensorflow",
				name: "Tensorflow",
			},
		],
		thumbnailSrc: "portfolio-assets/img/ztm-machine-learning.png",
		thumbnailAlt:
			"Thumbnail image from Zero To Mastery's Machine Learning Course page",
		content:
			'Course exercises and projects from the <a href="https://zerotomastery.io/courses/machine-learning-and-data-science-bootcamp/" target="_blank" rel="noopener noreferrer">Zero To Mastery Machine Learning course</a>.',
		cta: "View Projects",
		href: "https://github.com/Insidiae/ztm-machine-learning",
	},
	{
		title: "TypeScript Levelgrind",
		tags: [
			{
				type: "typescript",
				name: "TS",
			},
			{
				type: "node",
				name: "Node",
			},
			{
				type: "express",
				name: "Express",
			},
			{
				type: "react",
				name: "React",
			},
		],
		thumbnailSrc: "portfolio-assets/img/typescript-course.jpg",
		thumbnailAlt:
			"Thumbnail image from TypeScript: The Complete Developer's Guide's Udemy Course page",
		content:
			'Course exercises and projects from the <a href="https://www.udemy.com/course/typescript-the-complete-developers-guide/" target="_blank" rel="noopener noreferrer">TypeScript: The Complete Developer\'s Guide</a> course.',
		cta: "View Exercises",
		href: "https://github.com/Insidiae/typescript-levelgrind",
	},
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
		title: "Fullstack D3 and Data Visualization",
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
		thumbnailSrc: "portfolio-assets/img/fullstack-d3-cover.png",
		thumbnailAlt: "Cover image of the Fullstack D3 book",
		thumbnailAnchor: "top",
		content:
			'Course exercises and projects from the <a href="https://www.newline.co/fullstack-d3" target="_blank" rel="noopener noreferrer">Fullstack D3 and Data Visualization Masterclass.</a>',
		cta: "View Exercises",
		href: "https://insidiae.github.io/fullstack-d3/index.html",
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
		title: "The Ultimate JavaScript Animation Course",
		tags: [
			{
				type: "javascript",
				name: "JS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/dev-ed-js-animations.jpg",
		thumbnailAlt:
			"Thumbnail image from The Ultimate JavaScript Animation Course's course page",
		content:
			'Course projects from Dev Ed\'s <a href="https://developedbyed.com/p/the-ultimate-javascript-animation-course" target="_blank" rel="noopener noreferrer">The Ultimate JavaScript Animation Course</a>.',
		cta: "View Projects",
		href: "https://insidiae.github.io/dev-ed-js-animations/index.html",
	},
	{
		title: "CRWN Clothing",
		tags: [
			{
				type: "react",
				name: "React",
			},
			{
				type: "redux",
				name: "Redux",
			},
			{
				type: "redux",
				name: "Redux Toolkit",
			},
			{
				type: "typescript",
				name: "TS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/ztm-react.png",
		thumbnailAlt:
			"Thumbnail image from Zero To Mastery's Complete React Developer Course page",
		content:
			'Course project from the <a href="https://zerotomastery.io/courses/learn-react/" target="_blank" rel="noopener noreferrer">Zero To Mastery Complete React Developer course</a>.',
		href: "https://github.com/Insidiae/crwn-clothing",
	},
	{
		title: "CRWN Clothing - Remix Edition",
		tags: [
			{
				type: "react",
				name: "React",
			},
			{
				type: "remix",
				name: "Remix",
			},
			{
				type: "typescript",
				name: "TS",
			},
		],
		thumbnailSrc: "portfolio-assets/img/ztm-react.png",
		thumbnailAlt:
			"Thumbnail image from Zero To Mastery's Complete React Developer Course page",
		content:
			'Course project from the <a href="https://zerotomastery.io/courses/learn-react/" target="_blank" rel="noopener noreferrer">Zero To Mastery Complete React Developer course</a>, remade using <a href="https://remix.run/" target="_blank" rel="noopener noreferrer">Remix.run</a>.',
		href: "https://github.com/Insidiae/crwn-clothing-remix",
	},
	{
		title: "Rust Zero To Mastery",
		tags: [
			{
				type: "rust",
				name: "Rust",
			},
		],
		thumbnailSrc: "portfolio-assets/img/ztm-rust.png",
		thumbnailAlt:
			"Thumbnail image from Zero To Mastery's Rust Programming: The Complete Developer's Guide",
		content:
			'Course exercises and projects from Zero To Mastery\'s <a href="https://zerotomastery.io/courses/learn-rust/" target="_blank" rel="noopener noreferrer">Rust Programming: The Complete Developer\'s Guide</a>.',
		cta: "View Exercises",
		href: "https://github.com/Insidiae/ztm-rust",
	},
];

export default otherProjects;
