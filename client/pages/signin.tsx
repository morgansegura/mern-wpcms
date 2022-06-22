import React from 'react'
import { SigninPageProps } from '@config/interfaces'
import { Menu } from '@components/layouts'
import { SigninForm } from '@components/layouts'

const SigninPage: React.FC<SigninPageProps> = () => {
	return (
		<div>
			<Menu />
			<SigninForm title="Signin to your account" />
		</div>
	)
}

export default SigninPage
