import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { DefaultLayout } from '@components/layouts'
import { SigninForm } from '@components/layouts'
// [Config]
import { SigninPageProps } from '@config/interfaces'

const SigninPage: FC<SigninPageProps> = () => {
	return (
		<DefaultLayout>
			<Container contain="xl">
				<SigninForm title="Signin to your account" copy="Your FEWCrew&trade; Account is waiting." />
			</Container>
		</DefaultLayout>
	)
}

export default SigninPage
