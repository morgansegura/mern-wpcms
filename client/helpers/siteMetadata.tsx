const siteMetadata = {
	companyName: 'bananas eating monkeys',
	phoneNumber: '(xxx) xxx-xxxx',
	siteUrl: 'http://localhost:3000',
	email: 'yourName@example.com',
	twitter: 'https://twitter.com/example.page',
	twitterHandle: '@example',
	facebook: 'https://www.facebook.com/example.page',
	instagram: 'https://www.instagram.com/example.page',
	linkedin: 'https://www.linkedin.com/in/example.page',
	siteLogoSquare: '',
	cssResetType: 'normalize',
	adminSecret: 'RobertIsAwesome',

	config: {
		apiURL: 'http://localhost:8000/api/',
		roleType: { admins: ['Admin', 'Author', 'Subscriber'], guest: 'Guest' },
		paths: {
			landing: '/',
			adminLanding: '/admin',
			signin: '/signin',
			signup: '/signup',
		},
		signupForm: {
			title: 'Signup for a lifetime',
			copy: 'Become a proud FEWCrew™ Member.',
		},
		signinForm: {
			title: 'Signup for a lifetime',
			copy: 'Become a proud FEWCrew™ Member.',
		},
		forgotPasswordForm: {
			title: 'Reset Your Password',
			copy: "No worries. Let's get you another password!",
		},
		resetPasswordForm: {
			title: 'Reset Your Password',
			copy: "No worries. Let's get you another password!",
		},
	},
}

export default siteMetadata
