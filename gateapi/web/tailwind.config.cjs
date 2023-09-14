module.exports = {
	content: ['./src/**/*.html', './src/**/*.svelte'],
	theme: {
		extend: {},
		colors: {
			primary: '#35344C',
			secondary: '#C3C1D7',
			'background-primary': '#FCFCFD',
			accent: '#745CF1',
			purple: '#3F25C8',
			'light-purple': '#F3F1FE',
			grey: '#474374',
			white: '#FFFFFF',
			'white-secondary': '#E5E5E4',
			red: '#FF0000',
		},
		fontFamily: {
			inter: ['Inter'],
		},
		fontSize: {
			xxl: '2.188rem',
			m: '1.125rem',
			s: '1rem',
			xs: '0.938rem',
			xxs: '0.875rem',
			xxxs: '0.75rem',
		},
		dropShadow: {
			primary: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		},
		boxShadow: {
			'primary-shadow': '0px 4px 16px rgba(0, 0, 0, 0.1)',
		},
	},
	plugins: [],
}
