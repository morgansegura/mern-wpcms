import React from 'react'
import { DefaultLayout } from '@components/layouts'
import { SignupForm } from '@components/layouts'

const SignupPage: React.FC = () => {
	return (
		<DefaultLayout>
			<SignupForm title="Signup" copy="Become a proud FEWCrew&trade; Member." />
		</DefaultLayout>
	)
}

export default SignupPage
