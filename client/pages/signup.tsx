import { FC } from 'react'
import { Layout, SignupForm } from '@components/layouts'
import { siteMetadata } from 'helpers'

const SignupPage: FC = () => {
	const { signupTitle, signupCopy } = siteMetadata.signupForm

	return (
		<Layout>
			<SignupForm title={signupTitle} copy={signupCopy} />
		</Layout>
	)
}

export default SignupPage
