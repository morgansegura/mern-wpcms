import { FC } from 'react'
import { Layout, SignupForm } from '@components/layouts'
import { siteMetadata } from 'helpers'
import { Container } from 'core/layout/container'

const SignupPage: FC = () => {
	const { signupTitle, signupCopy } = siteMetadata.signupForm

	return (
		<Layout>
			<Container contain="xl">
				<Container contain="sm">
					<SignupForm title={signupTitle} copy={signupCopy} />
				</Container>
			</Container>
		</Layout>
	)
}

export default SignupPage
