import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { AdminLayout } from '@components/layouts'
import { ForgotPasswordForm } from '@components/forms'
// [Helpers]
import { siteMetadata as meta } from 'helpers'

const ForgotPassword: FC = () => {
	const { title, copy } = meta.config.forgotPasswordForm
	return (
		<AdminLayout>
			<Container contain="xl">
				<Container contain="sm">
					<ForgotPasswordForm title={title} copy={copy} />
				</Container>
			</Container>
		</AdminLayout>
	)
}

export default ForgotPassword
