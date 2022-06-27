import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { Layout, ForgotPasswordForm } from '@components/layouts'

const ForgotPassword: FC = () => {
	return (
		<Layout>
			<Container contain="xl">
				<ForgotPasswordForm
					title="Reset Your Password"
					copy="No worries. Let's get you another password!"
				/>
			</Container>
		</Layout>
	)
}

export default ForgotPassword
