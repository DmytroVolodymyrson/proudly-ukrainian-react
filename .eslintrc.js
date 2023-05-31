
const generalRules = {
	/**
	 * Override some ESLint rules
	 */
	'prefer-template': 'error',
	'no-console': 'error',
	'newline-before-return': 'error',
	'max-params': ['error', 6],
	'react/react-in-jsx-scope': 'off',
	'unicorn/no-keyword-prefix': 'off',
	'unicorn/consistent-function-scoping': 'off',

	/**
	 * Override some Import plugin rules
	 */
	'import/order': [
		'error',
		{
			groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
			pathGroups: [
				{
					// eslint-disable-next-line no-useless-escape
					pattern: '\#imports',
					group: 'external',
					position: 'before',
				},
				{
					pattern: '~icons/**',
					group: 'external',
					position: 'before',
				},
			],
		},
	],
	'import/first': 'error',
	'import/no-mutable-exports': 'error',
	'import/no-unresolved': [
		'error',
		{
			ignore: [
				'#app',
				'#image',
				'#imports',
				'#tailwind-config',
				'^@vueuse/integrations/',
				'^unplugin-icons/',
				'^unplugin-vue-components/',
				'^~',
			],
		},
	],
	'import/newline-after-import': 'error',

	/**
	 * Override some Unicorn rules
	 */
	'unicorn/filename-case': 'off',
};

const typeScriptRules = {
	...generalRules,

	/**
	 * Override some TypeScript rules
	 */
	'@typescript-eslint/no-implicit-any-catch': 'off', // DEPRECATED by Eslint
	'@typescript-eslint/no-empty-function': 'off', // This is ok
	'@typescript-eslint/no-unsafe-return': 'off', // @todo
	'@typescript-eslint/no-unsafe-call': 'off', // @todo
	'@typescript-eslint/no-unsafe-assignment': 'off', // @todo
	'@typescript-eslint/restrict-template-expressions': 'off', // @todo
	'@typescript-eslint/naming-convention': 'off', // This is ok
	'@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
	'@typescript-eslint/no-unused-vars': ['error', {args: 'all', argsIgnorePattern: '^_'}],
	camelcase: 'off',
};

module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'xo',
	],
	overrides: [
		{
			extends: [
				'xo',
				'xo-typescript',
				'plugin:unicorn/all',
				'plugin:import/recommended',
				'plugin:import/typescript',
				'plugin:sonarjs/recommended',
				'plugin:prettier/recommended',
			],
			files: [
				'*.ts',
				'*.tsx',
			],

			plugins: ['unused-imports', 'unicorn', 'sonarjs'],
			rules: {
				...typeScriptRules,
			},
		},
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'react', 'json-format',
	],
	rules: {
	},
};
