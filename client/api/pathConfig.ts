export const pathConfig = {
	base: {
		landing: {
			href: '/',
			label: 'Home',
			title: 'Home',
			level: 'guest',
		},
		about: {
			href: '/about',
			label: 'About',
			title: 'About',
			level: 'guest',
		},
		contact: {
			href: '/contact',
			label: 'Contact',
			title: 'Contact',
			level: 'guest',
		},
	},

	account: {
		dashboard: {
			href: '/admin/dashboard',
			label: 'Dashboard',
			title: 'Dashboard',
			level: 'admin',
		},
		profile: {
			href: '/account/profile',
			label: 'Profile',
			title: 'Profile',
			level: 'admin',
		},
		account: {
			href: '/account',
			label: 'Account',
			title: 'Account',
			level: 'admin',
		},
	},

	admin: {
		documentation: {
			href: '/admin/docs',
			label: 'Documentation',
			title: 'Documentation',
			level: 'guest',
		},
		styleGuide: {
			href: '/admin/docs/style-guide',
			label: 'Style Guide',
			title: 'Style Guide',
			level: 'guest',
		},
		siteMap: {
			href: '/admin/docs/sitemap',
			label: 'Site Map',
			title: 'Site Map',
			level: 'guest',
		},
	},

	auth: {
		signin: {
			href: '/auth/signin',
			label: 'Login',
			title: 'Login',
			level: 'guest',
		},
		signout: {
			href: '/auth/signout',
			label: 'Signout',
			title: 'Signout',
			level: 'admin',
		},
		register: {
			href: '/auth/register',
			label: 'Register',
			title: 'Register',
			level: 'guest',
		},
	},
}
