import { FC } from 'react'
// [Core]
import { Container } from 'core/layout'
// [Components]
import { DefaultLayout, ForgotPasswordForm } from '@components/layouts'

const ForgotPassword: FC = () => {
	return (
		<DefaultLayout>
			<Container contain="xl">
				<ForgotPasswordForm
					title="Reset Your Password"
					copy="No worries. Let's get you another password!"
				/>
			</Container>
		</DefaultLayout>
	)
}

export default ForgotPassword
