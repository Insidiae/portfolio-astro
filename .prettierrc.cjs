module.exports = {
	plugins: [require.resolve("prettier-plugin-astro")],
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	useTabs: true,
	endOfLine: "crlf",
};
