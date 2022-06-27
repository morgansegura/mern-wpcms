import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { Layout, SigninForm } from '@components/layouts'
// [Config]

const SigninPage: FC = () => {
	return (
		<Layout>
			<Container contain="xl">
				<SigninForm title="Signin to your account" copy="Your FEWCrew&trade; Account is waiting." />
			</Container>
		</Layout>
	)
}

export default SigninPage
