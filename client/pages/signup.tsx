import { FC } from 'react'
// [Core]
import { Container } from '@core/layout'
// [Components]
import { AdminLayout } from '@components/layouts'
import { SignupForm } from '@components/forms'
// [Helpers]
import { siteMetadata as meta } from 'helpers'

const SignupPage: FC = () => {
	const { title, copy } = meta.config.signupForm

	console.log(title)

	return (
		<AdminLayout>
			<Container contain="xl">
				<Container contain="sm">
					<SignupForm title={title} copy={copy} />
				</Container>
			</Container>
		</AdminLayout>
	)
}

export default SignupPage
