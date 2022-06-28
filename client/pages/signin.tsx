import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { Layout } from '@components/layouts'
import { SigninForm } from '@components/forms'
// [Helpers]
import { siteMetadata as meta } from 'helpers'

const SigninPage: FC = () => {
	const { title, copy } = meta.config.signupForm
	return (
		<Layout>
			<Container contain="xl">
				<Container contain="sm">
					<SigninForm title={title} copy={copy} />
				</Container>
			</Container>
		</Layout>
	)
}

export default SigninPage
