const config = {
	content: [
	  "./src/**/*.{html,js,svelte,ts}",
	  "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
	],
  
	theme: {
		container: {
		  padding: {
			DEFAULT: '1.5rem',
			sm: '2rem',
			lg: '4rem',
			xl: '5rem',
			'2xl': '6rem',
		  },
		},
	  },
  
	plugins: [
	  require('flowbite/plugin')
	],
	darkMode: 'class',
  };
  
  module.exports = config;