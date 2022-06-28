import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { Layout } from '@components/layouts'
import { ForgotPasswordForm } from '@components/forms'
// [Helpers]
import { siteMetadata as meta } from 'helpers'

const ForgotPassword: FC = () => {
	const { title, copy } = meta.config.forgotPasswordForm
	return (
		<Layout>
			<Container contain="xl">
				<Container contain="sm">
					<ForgotPasswordForm title={title} copy={copy} />
				</Container>
			</Container>
		</Layout>
	)
}

export default ForgotPassword
