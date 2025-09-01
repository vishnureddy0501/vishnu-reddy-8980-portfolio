import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
	{
		ignores: ["node_modules", "dist"], // ignore build + deps
	},
	{
		files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		plugins: {
			prettier: eslintPluginPrettier,
		},
		rules: {
			// ESLint recommended
			"no-unused-vars": "warn",
			"no-console": "off",

			// Prettier integration
			"prettier/prettier": [
				"error",
				{
					tabWidth: 4, // ✅ 4 spaces
					useTabs: false,
					semi: true,
					singleQuote: false,
				},
			],
		},
	},
];
