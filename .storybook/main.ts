import { StorybookConfig } from 'storybook-framework-qwik'

const config: StorybookConfig = {
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'storybook-addon-data-theme-switcher',
	],
	framework: {
		name: 'storybook-framework-qwik',
	},
	core: {
		renderer: 'storybook-framework-qwik',
	},
	stories: [
		// ...rootMain.stories,
		'../src/components/**/*.stories.mdx',
		'../src/components/**/*.stories.@(js|jsx|ts|tsx)',
	],
	docs: {
		//👇 See the table below for the list of supported options
		autodocs: 'tag',
		defaultName: 'Documentation',
	},

	viteFinal: async (config: any) => {
		return config
	},
}

export default config
