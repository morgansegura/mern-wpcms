import React from 'react'
// [Core]
import { Container } from 'core/layouts'
// [Components]
import { DefaultLayout, Menu } from '@components/layouts'
import { SigninForm } from '@components/layouts'
// [Config]
import { SigninPageProps } from '@config/interfaces'

const SigninPage: React.FC<SigninPageProps> = () => {
	return (
		<DefaultLayout>
			<Container contain="xl">
				<SigninForm title="Signin to your account" />
			</Container>
		</DefaultLayout>
	)
}

export default SigninPage
