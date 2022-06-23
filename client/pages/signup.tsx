import React from 'react'
import { SignupPageProps } from '@config/interfaces'
import { Menu } from '@components/layouts'
import { SignupForm } from '@components/layouts'

const SignupPage: React.FC<SignupPageProps> = () => {
	return (
		<div>
			<Menu />
			<SignupForm title="Signup" copy="Become a proud FEWCrew&trade; Member." />
		</div>
	)
}

export default SignupPage
