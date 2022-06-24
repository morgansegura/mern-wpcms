import React from 'react'
import { SignupPageProps } from '@config/interfaces'
import { DefaultLayout, Menu } from '@components/layouts'
import { SignupForm } from '@components/layouts'

const SignupPage: React.FC<SignupPageProps> = () => {
	return (
		<DefaultLayout>
			<SignupForm title="Signup" copy="Become a proud FEWCrew&trade; Member." />
		</DefaultLayout>
	)
}

export default SignupPage
