module.exports = {
	"extends": [
		"eslint:recommended",
		"plugin:import/recommended",
		"plugin:import/typescript",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"./rules/base.json",
		"./rules/import.json",
		"./rules/typescript.json"
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"sourceType": "module"
	},
	"env": {
		"node": true,
		"es6": true
	},
}
